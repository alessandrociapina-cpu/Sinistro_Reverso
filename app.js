// ── VERSÃO DO APP ─────────────────────────────────────────────────────────────
const VERSAO_APP = "5.0";
if (localStorage.getItem("versao_planilha_sabesp") !== VERSAO_APP) {
    if ('caches' in window) {
        caches.keys().then(names => { names.forEach(name => caches.delete(name)); });
    }
    localStorage.setItem("versao_planilha_sabesp", VERSAO_APP);
    window.location.reload(true);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js'); });
}

// ── CONSTANTES FÍSICAS ────────────────────────────────────────────────────────
const GRAVIDADE = 9.81;

// ── CONSTANTES ECONÔMICAS (atualizar anualmente) ──────────────────────────────
// Fonte: Decreto Estadual SP — vigência 2026
const VALOR_UFESP = 35.36;
// Fonte: Tabela tarifária Sabesp — vigência jan/2026 (valor padrão do campo, editável pelo usuário)
const PRECO_M3_AGUA_PADRAO = 20.52;
// ─────────────────────────────────────────────────────────────────────────────

// ── ESTADO DA APLICAÇÃO ───────────────────────────────────────────────────────
// Subtotais mantidos em JS para desacoplar a lógica de cálculo do DOM.
// Funções de cálculo escrevem em `estado`; funções de renderização lêem `estado`.
const estado = {
    subtotalAgua: 0,
    subtotalServicos: 0,
    subtotalMateriais: 0
};
// ─────────────────────────────────────────────────────────────────────────────

let dbServicos = [];
let dbMateriais = [];

const vazoesSecaoPlena = {
    "20": 0.300, "25": 0.508, "32": 0.800, "50": 1.013, "75": 2.942,
    "100": 6.269, "150": 18.211, "200": 32.780, "250": 59.004,
    "300": 106.207, "350": 153.410, "400": 200.613
};

window.onload = () => {
    try {
        inicializarBases();
        gerarLinhasTabela('tabela-servicos', 1, 'servico');
        gerarLinhasTabela('tabela-materiais', 1, 'material');
        tratarSecaoVazamento();
        tratarFormatoDano();
        tratarUnidade();
        tratarCausador();
    } catch(e) { console.error("Erro na inicialização:", e); }
};

function findValueByKeys(obj, keys) {
    const objKeys = Object.keys(obj);
    for (let searchKey of keys) {
        const foundKey = objKeys.find(k => k.trim().toLowerCase() === searchKey.toLowerCase());
        if (foundKey) return obj[foundKey];
    }
    return "";
}

function inicializarBases() {
    try {
        if (typeof baseServicos !== 'undefined') {
            dbServicos = baseServicos.map(s => ({
                NPRECO: findValueByKeys(s, ["item", "npreco", "código", "codigo"]),
                ESPEC: findValueByKeys(s, ["descrição", "descricao", "espec"]),
                UNID: String(findValueByKeys(s, ["unid", "unidade"])).trim(),
                PUNIT: findValueByKeys(s, ["preço", "preco", "punit", "valor unitário", "valor"])
            }));
        }
        if (typeof baseMateriais !== 'undefined') {
            dbMateriais = baseMateriais.map(m => ({
                NPRECO: findValueByKeys(m, ["material", "item", "npreco", "código", "codigo"]),
                ESPEC: findValueByKeys(m, ["texto breve material", "descrição", "descricao", "espec", "texto breve"]),
                UNID: String(findValueByKeys(m, ["unid. med.", "unid. med", "unid.medida básica", "unid. medida basica", "unid", "unidade", "umb"])).trim(),
                PUNIT: findValueByKeys(m, ["valor unitário", "valor unitario", "preço", "preco", "punit", "valor"])
            }));
        }
    } catch(e) { console.error("Erro ao processar as bases de dados:", e); }
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('desc-input')) {
        document.querySelectorAll('.autocomplete-list').forEach(el => el.style.display = 'none');
    }
});

function atualizarLinhas(tipo) {
    const tabelaId = tipo === 'servico' ? 'tabela-servicos' : 'tabela-materiais';
    const tabela = document.getElementById(tabelaId);
    if (!tabela) return;

    const linhas = Array.from(tabela.querySelectorAll('tr'));
    let vazias = [];

    linhas.forEach(tr => {
        const input = tr.querySelector('.desc-input');
        if (input && input.value.trim() === '') {
            vazias.push(tr);
        } else if (input) {
            tr.style.display = '';
            tr.classList.remove('hide-on-print');
        }
    });

    if (vazias.length === 0) {
        gerarLinhasTabelaAux(tabelaId, 1, tipo);
        return;
    }

    const ultimaVazia = vazias[vazias.length - 1];
    ultimaVazia.style.display = '';

    for (let i = 0; i < vazias.length - 1; i++) {
        const tr = vazias[i];
        const input = tr.querySelector('.desc-input');
        const hasFocus = (document.activeElement === input || tr.contains(document.activeElement));
        if (hasFocus) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
            tr.classList.add('hide-on-print');
        }
    }
}

function gerarLinhasTabelaAux(tabelaId, qtd, tipo) {
    const tabela = document.getElementById(tabelaId);
    for (let i = 0; i < qtd; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="position: relative; padding: 0; overflow: visible;">
                <input type="text" class="desc-input" autocomplete="off"
                    onkeyup="mostrarSugestoes(this, '${tipo}')"
                    oninput="mostrarSugestoes(this, '${tipo}'); atualizarLinhas('${tipo}');"
                    onfocus="mostrarSugestoes(this, '${tipo}')"
                    onblur="setTimeout(() => atualizarLinhas('${tipo}'), 200)"
                    style="padding: 4px;" placeholder="Digite para buscar...">
                <div class="autocomplete-list"></div>
            </td>
            <td style="padding: 0;"><input type="text" class="num-${tipo}" readonly style="text-align: center; color: var(--text-black); font-weight: bold; padding: 4px;"></td>
            <td style="padding: 0;"><input type="text" class="unid-${tipo}" readonly style="text-align: center; padding: 4px;"></td>
            <td style="padding: 0;"><input type="number" class="qtd-${tipo}" min="0" oninput="calcSubtotalLinha(this, '${tipo}')" style="padding: 4px;"></td>
            <td style="padding: 0;"><input type="number" class="val-${tipo}" readonly style="padding: 4px;"></td>
            <td style="padding: 0;"><input type="text" class="sub-${tipo}" readonly value="0.00" style="text-align: right; font-weight: bold; color: var(--text-black); padding: 4px;"></td>
        `;
        tabela.appendChild(tr);
    }
}

function gerarLinhasTabela(tabelaId, qtd, tipo) {
    gerarLinhasTabelaAux(tabelaId, qtd, tipo);
    atualizarLinhas(tipo);
}

window.addEventListener('beforeprint', function() {
    ['tabela-servicos', 'tabela-materiais'].forEach(id => {
        document.querySelectorAll(`#${id} tr`).forEach(tr => {
            const inputDesc = tr.querySelector('.desc-input');
            if (inputDesc && inputDesc.value.trim() === '') tr.classList.add('hide-on-print');
        });
    });
});

window.addEventListener('afterprint', function() {
    document.querySelectorAll('.hide-on-print').forEach(el => {
        const desc = el.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') el.classList.remove('hide-on-print');
        else if (!el.style.display) el.classList.remove('hide-on-print');
    });
    atualizarLinhas('servico');
    atualizarLinhas('material');
});

function parseValor(strPunit) {
    if (!strPunit) return 0;
    let limpo = String(strPunit).replace(/[R$\s]/g, '').replace(/\./g, '').replace(',', '.');
    return parseFloat(limpo) || 0;
}

function removerAcentos(texto) {
    if (!texto) return "";
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mostrarSugestoes(input, tipo) {
    const valPesquisa = removerAcentos(input.value);
    const db = (tipo === 'servico') ? dbServicos : dbMateriais;
    const containerDropdown = input.nextElementSibling;

    if (valPesquisa.trim() === '') {
        containerDropdown.style.display = 'none';
        limparLinha(input, tipo);
        return;
    }

    containerDropdown.innerHTML = '';

    const filtrados = db.filter(item => {
        const espec = removerAcentos(String(item.ESPEC || ''));
        const npreco = removerAcentos(String(item.NPRECO || ''));
        return espec.includes(valPesquisa) || npreco.includes(valPesquisa);
    }).slice(0, 40);

    if (filtrados.length === 0) { containerDropdown.style.display = 'none'; return; }

    filtrados.forEach(item => {
        const div = document.createElement('div');
        const strong = document.createElement('strong');
        strong.textContent = item.NPRECO;
        div.appendChild(strong);
        div.appendChild(document.createTextNode(` - ${item.ESPEC}`));

        div.onmousedown = function(e) {
            e.preventDefault();
            e.stopPropagation();
            input.value = item.ESPEC;
            containerDropdown.style.display = 'none';
            aplicarItemSelecionado(input, item, tipo);
        };
        containerDropdown.appendChild(div);
    });
    containerDropdown.style.display = 'block';
}

function limparLinha(input, tipo) {
    const tr = input.closest('tr');
    tr.querySelector(`.num-${tipo}`).value = "";
    tr.querySelector(`.unid-${tipo}`).value = "";
    tr.querySelector(`.val-${tipo}`).value = "";
    calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
    atualizarLinhas(tipo);
}

function aplicarItemSelecionado(input, item, tipo) {
    const tr = input.closest('tr');
    tr.querySelector(`.num-${tipo}`).value = item.NPRECO;
    tr.querySelector(`.unid-${tipo}`).value = item.UNID;
    tr.querySelector(`.val-${tipo}`).value = parseValor(item.PUNIT);
    calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
    atualizarLinhas(tipo);
}

function salvarProjeto() {
    const projeto = {
        inputsGerais: {},
        tabelaServicos: [],
        tabelaMateriais: []
    };

    document.querySelectorAll('input[id], select[id]').forEach(el => {
        if (el.id !== 'input-arquivo') projeto.inputsGerais[el.id] = el.value;
    });

    // Persiste os campos contenteditable do rodapé
    ['rodape-unidade-dep', 'rodape-endereco'].forEach(id => {
        const el = document.getElementById(id);
        if (el) projeto.inputsGerais[id] = el.innerText;
    });

    document.querySelectorAll('#tabela-servicos tr').forEach(tr => {
        const desc = tr.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') {
            projeto.tabelaServicos.push({
                desc: desc.value,
                qtd: tr.querySelector('.qtd-servico').value,
                npreco: tr.querySelector('.num-servico').value,
                unid: tr.querySelector('.unid-servico').value,
                val: tr.querySelector('.val-servico').value
            });
        }
    });

    document.querySelectorAll('#tabela-materiais tr').forEach(tr => {
        const desc = tr.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') {
            projeto.tabelaMateriais.push({
                desc: desc.value,
                qtd: tr.querySelector('.qtd-material').value,
                npreco: tr.querySelector('.num-material').value,
                unid: tr.querySelector('.unid-material').value,
                val: tr.querySelector('.val-material').value
            });
        }
    });

    const blob = new Blob([JSON.stringify(projeto)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Orcamento_${document.getElementById('sef').value || 'Sabesp'}.json`;
    a.click();
}

function carregarProjeto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const projeto = JSON.parse(e.target.result);

            for (let id in projeto.inputsGerais) {
                const el = document.getElementById(id);
                // SPANs contenteditable são restaurados separadamente via innerText
                if (el && el.tagName !== 'SPAN') el.value = projeto.inputsGerais[id];
            }

            tratarUnidade(); tratarDano(); tratarDropdown('material-dano'); tratarDropdown('diametro-dano'); tratarSecaoVazamento(); tratarFormatoDano(); tratarCausador();

            // Restaura rodapé após tratarUnidade() para não sobrescrever
            ['rodape-unidade-dep', 'rodape-endereco'].forEach(id => {
                const el = document.getElementById(id);
                if (el && projeto.inputsGerais[id] !== undefined) el.innerText = projeto.inputsGerais[id];
            });

            document.getElementById('tabela-servicos').innerHTML = '';
            document.getElementById('tabela-materiais').innerHTML = '';

            function restaurarTabela(itens, tabelaId, tipo) {
                if (itens && itens.length > 0) {
                    itens.forEach(item => {
                        gerarLinhasTabelaAux(tabelaId, 1, tipo);
                        const trs = document.querySelectorAll(`#${tabelaId} tr`);
                        const tr = trs[trs.length - 1];
                        const descInput = tr.querySelector('.desc-input');
                        descInput.value = item.desc;
                        tr.querySelector(`.qtd-${tipo}`).value = item.qtd;
                        const db = tipo === 'servico' ? dbServicos : dbMateriais;
                        const obj = db.find(x => x.ESPEC === item.desc || `${x.NPRECO} - ${x.ESPEC}` === item.desc);
                        if (obj) {
                            aplicarItemSelecionado(descInput, obj, tipo);
                        } else if (item.val) {
                            // Fallback: usa preço salvo caso o item não seja encontrado no banco atual
                            tr.querySelector(`.num-${tipo}`).value = item.npreco || '';
                            tr.querySelector(`.unid-${tipo}`).value = item.unid || '';
                            tr.querySelector(`.val-${tipo}`).value = item.val;
                            calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
                        }
                    });
                } else {
                    gerarLinhasTabelaAux(tabelaId, 1, tipo);
                }
            }

            restaurarTabela(projeto.tabelaServicos, 'tabela-servicos', 'servico');
            restaurarTabela(projeto.tabelaMateriais, 'tabela-materiais', 'material');

            calcularAgua();
            atualizarLinhas('servico');
            atualizarLinhas('material');
        } catch(err) {
            alert("Erro ao ler o arquivo do projeto.");
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}

function calcSubtotalLinha(inputQtd, tipo) {
    const tr = inputQtd.closest('tr');
    const qtd = Math.max(0, parseFloat(inputQtd.value) || 0);
    const valUnit = parseFloat(tr.querySelector(`.val-${tipo}`).value) || 0;
    tr.querySelector(`.sub-${tipo}`).value = (qtd * valUnit).toFixed(2);
    somarTabela(tipo);
}

function somarTabela(tipo) {
    let total = 0;
    document.querySelectorAll(`.sub-${tipo}`).forEach(s => total += parseFloat(s.value) || 0);

    if (tipo === 'servico') {
        estado.subtotalServicos = total;
        document.getElementById('subtotal-servicos').innerText = total.toFixed(2);
    } else {
        estado.subtotalMateriais = total;
        document.getElementById('subtotal-materiais').innerText = total.toFixed(2);
    }

    const sub2 = estado.subtotalServicos + estado.subtotalMateriais;
    document.getElementById('subtotal-2').innerText = sub2.toFixed(2);
    calcularGeral();
}

function calcularGeral() {
    const sub1 = estado.subtotalAgua;
    const sub2 = estado.subtotalServicos + estado.subtotalMateriais;
    const taxaBdi = Math.max(0, parseFloat(document.getElementById('taxa-bdi').value) || 0);

    const sub3 = sub2 * (taxaBdi / 100);
    document.getElementById('subtotal-3').innerText = sub3.toFixed(2);

    document.getElementById('resumo-1').innerText = sub1.toFixed(2);
    document.getElementById('resumo-2').innerText = sub2.toFixed(2);
    document.getElementById('resumo-3').innerText = sub3.toFixed(2);

    const totalGeral = sub1 + sub2 + sub3;
    document.getElementById('total-final').innerText = totalGeral.toFixed(2);
    document.getElementById('total-ufesp').innerText = (totalGeral / VALOR_UFESP).toFixed(2);
}

function tratarUnidade() {
    const val = document.getElementById('unidade').value;
    const rodapeUnidadeDep = document.getElementById('rodape-unidade-dep');
    rodapeUnidadeDep.innerText = val || "_______________________________________________________";
}

function tratarCausador() {
    const select = document.getElementById('causador');
    const inputOutros = document.getElementById('causador-outros');
    if (select.value === 'Outros') {
        inputOutros.classList.remove('hidden');
        select.classList.add('hide-on-print');
    } else {
        inputOutros.classList.add('hidden');
        inputOutros.value = '';
        select.classList.remove('hide-on-print');
    }
}

function tratarDano() {
    const val = document.getElementById('tipo-dano').value;
    const inputOutros = document.getElementById('tipo-dano-outros');
    const secaoAgua = document.getElementById('secao-agua');
    if (val === 'Outros') inputOutros.classList.remove('hidden');
    else inputOutros.classList.add('hidden');

    if (val.toLowerCase().includes('água') || val.toLowerCase().includes('agua')) {
        secaoAgua.style.display = 'table';
    } else {
        secaoAgua.style.display = 'none';
        estado.subtotalAgua = 0;
        document.getElementById('subtotal-1').innerText = "0.00";
        calcularGeral();
    }
}

function tratarDropdown(id) {
    const val = document.getElementById(id).value;
    const inputOutros = document.getElementById(id + '-outros');
    if (val === 'Outros') inputOutros.classList.remove('hidden');
    else inputOutros.classList.add('hidden');
    if (id === 'diametro-dano') calcularAgua();
}

function tratarSecaoVazamento() {
    const val = document.getElementById('tipo-secao').value;
    const formatoSelect = document.getElementById('formato-dano');
    const avisoPlena = document.getElementById('aviso-secao-plena');
    const pressaoInput = document.getElementById('pressao');

    const thFormato = document.getElementById('th-formato');
    const thDim1 = document.getElementById('th-dim-1');
    const thDim2 = document.getElementById('th-dim-2');
    const tdFormato = document.getElementById('td-formato');
    const tdDim1 = document.getElementById('td-dim-1');
    const tdDim2 = document.getElementById('td-dim-2');

    if (val === 'Área do Furo') {
        formatoSelect.style.display = 'inline-block';
        avisoPlena.style.display = 'none';
        pressaoInput.disabled = false;
        thFormato.colSpan = 3;
        tdFormato.colSpan = 3;
        thFormato.innerText = "Formato do Dano";
        tratarFormatoDano();
    } else {
        formatoSelect.style.display = 'none';
        avisoPlena.style.display = 'block';
        pressaoInput.disabled = true;
        thDim1.style.display = 'none';
        thDim2.style.display = 'none';
        tdDim1.style.display = 'none';
        tdDim2.style.display = 'none';
        thFormato.colSpan = 5;
        tdFormato.colSpan = 5;
        thFormato.innerText = "Informação";
    }
    calcularAgua();
}

function tratarFormatoDano() {
    const secao = document.getElementById('tipo-secao').value;
    if (secao !== 'Área do Furo') return;

    const formato = document.getElementById('formato-dano').value;

    const thDim1 = document.getElementById('th-dim-1');
    const thDim2 = document.getElementById('th-dim-2');
    const tdDim1 = document.getElementById('td-dim-1');
    const tdDim2 = document.getElementById('td-dim-2');
    const inputDiam = document.getElementById('diametro-furo');
    const inputComp = document.getElementById('comp-furo');

    if (formato === 'circular') {
        thDim1.style.display = 'table-cell';
        tdDim1.style.display = 'table-cell';
        thDim1.colSpan = 2;
        tdDim1.colSpan = 2;
        thDim1.innerText = "Diâm. (cm)";
        inputDiam.style.display = 'inline-block';
        inputComp.style.display = 'none';
        thDim2.style.display = 'none';
        tdDim2.style.display = 'none';
    } else {
        thDim1.style.display = 'table-cell';
        tdDim1.style.display = 'table-cell';
        thDim1.colSpan = 1;
        tdDim1.colSpan = 1;
        thDim1.innerText = "Comp.(cm)";
        inputDiam.style.display = 'none';
        inputComp.style.display = 'inline-block';
        thDim2.style.display = 'table-cell';
        tdDim2.style.display = 'table-cell';
        thDim2.colSpan = 1;
        tdDim2.colSpan = 1;
        thDim2.innerText = "Larg.(cm)";
    }
    calcularAgua();
}

// Função pura separada para calcular vazão (desacoplamento e testabilidade)
function calcularVazaoOrificio(cd, areaM2, pressaoMca) {
    if (pressaoMca <= 0 || areaM2 <= 0 || cd <= 0) return 0;
    return (cd * areaM2 * Math.sqrt(2 * GRAVIDADE * pressaoMca)) * 1000;
}

function alternarBotoesAcao(desabilitar) {
    const msg = desabilitar
        ? 'Ação bloqueada: diâmetro sem vazão tabelada. Selecione um diâmetro padrão em "Dados da Ocorrência".'
        : '';

    ['btn-imprimir-proj', 'btn-salvar-proj'].forEach(id => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.disabled = desabilitar;
        btn.style.opacity = desabilitar ? '0.5' : '1';
        btn.style.cursor = desabilitar ? 'not-allowed' : 'pointer';
        btn.title = msg;
    });
}

function calcularAgua() {
    const tipoSecao = document.getElementById('tipo-secao').value;
    const dIni = document.getElementById('data-ini').value;
    const hIni = document.getElementById('hora-ini').value;
    const dFim = document.getElementById('data-fim').value;
    const hFim = document.getElementById('hora-fim').value;
    const pressao = Math.max(0, parseFloat(document.getElementById('pressao').value) || 0);
    const precoM3 = Math.max(0, parseFloat(document.getElementById('valor-m3').value) || 0);

    let segundos = 0;
    if (dIni && hIni && dFim && hFim) {
        const start = new Date(`${dIni}T${hIni}`);
        const end = new Date(`${dFim}T${hFim}`);
        segundos = Math.max(0, (end - start) / 1000);
    }
    document.getElementById('calc-segundos').innerText = segundos;

    let vazaoLs = 0;
    let erroSecaoPlena = false;

    if (tipoSecao === 'Área do Furo') {
        const formato = document.getElementById('formato-dano').value;
        let areaM2 = 0;
        let cd = 0.61;

        if (formato === 'circular') {
            cd = 0.61;
            const diamCm = Math.max(0, parseFloat(document.getElementById('diametro-furo').value) || 0);
            areaM2 = Math.PI * Math.pow((diamCm / 100) / 2, 2);
        } else {
            cd = formato === 'irregular' ? 0.55 : (formato === 'longitudinal' ? 0.80 : 0.58);
            const compCm = Math.max(0, parseFloat(document.getElementById('comp-furo').value) || 0);
            const largCm = Math.max(0, parseFloat(document.getElementById('larg-furo').value) || 0);
            areaM2 = (compCm / 100) * (largCm / 100);
        }
        vazaoLs = calcularVazaoOrificio(cd, areaM2, pressao);
    } else {
        const diamRede = String(document.getElementById('diametro-dano').value).trim();
        if (vazoesSecaoPlena[diamRede]) {
            vazaoLs = vazoesSecaoPlena[diamRede];
            document.getElementById('aviso-secao-plena').innerText = `Vazão tabelada (${vazaoLs.toFixed(3)} L/s) aplicada.`;
            document.getElementById('aviso-secao-plena').style.color = "var(--sabesp-blue)";
        } else {
            vazaoLs = 0;
            erroSecaoPlena = true;
            document.getElementById('aviso-secao-plena').innerText = "Diâmetro sem vazão tabelada.";
            document.getElementById('aviso-secao-plena').style.color = "red";
        }
    }

    alternarBotoesAcao(erroSecaoPlena);

    document.getElementById('calc-vazao').innerText = vazaoLs.toFixed(3);
    const volM3 = (vazaoLs * segundos) / 1000;
    document.getElementById('calc-vol').innerText = volM3.toFixed(2);

    const totalAgua = volM3 * precoM3;
    document.getElementById('calc-total-agua').innerText = totalAgua.toFixed(2);
    document.getElementById('subtotal-1').innerText = totalAgua.toFixed(2);
    estado.subtotalAgua = totalAgua;

    calcularGeral();
}

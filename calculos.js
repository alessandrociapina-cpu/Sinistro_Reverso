window.SabespCalculos = Object.freeze({
  GRAVIDADE: 9.81,

  calcularVazaoOrificio(cd, areaM2, pressaoMca) {
    if (pressaoMca <= 0 || areaM2 <= 0 || cd <= 0) return 0;
    return (cd * areaM2 * Math.sqrt(2 * this.GRAVIDADE * pressaoMca)) * 1000;
  },

  calcularTempoSegundos(dataInicio, horaInicio, dataFim, horaFim) {
    if (!dataInicio || !horaInicio || !dataFim || !horaFim) {
      return { segundos: 0, valido: false, motivo: 'periodo-incompleto' };
    }

    const inicio = new Date(`${dataInicio}T${horaInicio}`);
    const fim = new Date(`${dataFim}T${horaFim}`);

    if (Number.isNaN(inicio.getTime()) || Number.isNaN(fim.getTime())) {
      return { segundos: 0, valido: false, motivo: 'periodo-invalido' };
    }

    const diferencaSegundos = (fim - inicio) / 1000;
    if (diferencaSegundos < 0) {
      return { segundos: 0, valido: false, motivo: 'periodo-negativo' };
    }

    return { segundos: diferencaSegundos, valido: true, motivo: '' };
  },

  calcularPerdaAgua(vazaoLs, segundos, precoM3) {
    const volumeM3 = (Math.max(0, vazaoLs) * Math.max(0, segundos)) / 1000;
    const total = volumeM3 * Math.max(0, precoM3);
    return { volumeM3, total };
  }
});

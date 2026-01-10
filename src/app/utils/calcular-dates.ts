// plantilla-dates. ts

/**
 * Llista de dies no lectius (festius) en format YYYY-MM-DD
 */
export const DIES_NO_LECTIUS:  string[] = [
  '2025-12-08',
  '2025-12-22',
  '2025-12-23',
  '2025-12-24',
  '2025-12-25',
  '2025-12-26',
  '2025-12-27',
  '2025-12-28',
  '2025-12-29',
  '2025-12-30',
  '2025-12-31',
  '2026-01-01',
  '2026-01-02',
  '2026-01-05',
  '2026-01-06',
  '2026-01-20',
  '2026-02-27',
  '2026-03-02',
  '2026-03-03',
  '2026-04-02',
  '2026-04-03',
  '04/06/2026',
  '04/07/2026',
  '04/08/2026',
  '04/09/2026',
  '04/10/2026',
  '2026-05-01',
  '2026-05-04'
];

/**
 * Comprova si una data és cap de setmana (dissabte o diumenge)
 * @param data - Data a comprovar
 * @returns true si és cap de setmana, false en cas contrari
 */
export function esCapDeSetmana(data: Date): boolean {
  const dia = data.getDay();
  return dia === 0 || dia === 6; // 0 = Diumenge, 6 = Dissabte
}

/**
 * Comprova si una data és un dia festiu (no lectiu)
 * @param data - Data a comprovar
 * @returns true si és festiu, false en cas contrari
 */
export function esFestiu(data: Date): boolean {
  const dataString = data.toISOString().split('T')[0]; // Format YYYY-MM-DD
  return DIES_NO_LECTIUS.includes(dataString);
}

/**
 * Comprova si una data és un dia laborable
 * @param data - Data a comprovar
 * @returns true si és laborable, false en cas contrari
 */
export function esDiaLaborable(data: Date): boolean {
  // TODO: Completar aquesta funció
  // Ha de retornar true només si NO és cap de setmana NI festiu
  // Pista: utilitza les funcions esCapDeSetmana() i esFestiu()
  return !esCapDeSetmana(data) && !esFestiu(data);
}

/**
 * Calcula la data final a partir d'una data d'inici i un nombre de dies laborables
 * @param dataInicial - Data d'inici de les pràctiques
 * @param diesLaborablesNecessaris - Número de dies laborables necessaris
 * @returns Data final calculada
 */
export function calcularDataFinal(
  dataInicial: Date,
  diesLaborablesNecessaris:  number
): Date {
  // TODO: Completar aquesta funció
  // 1. Començar des de dataInicial
  // 2. Crear un comptador de dies laborables = 0
  // 3. Mentre el comptador sigui menor que diesLaborablesNecessaris:
  //    - Avançar un dia
  //    - Si el dia és laborable, incrementar el comptador
  // 4. Retornar la data final

  let dataActual = new Date(dataInicial);
  let diesComptats = 0;

  // Escriu el teu codi aquí...
  while (diesComptats < diesLaborablesNecessaris){

    // avanzar un dia
    dataActual.setDate(dataActual.getDate() + 1);

    // comprobar si fecha actual es laborable
    if (esDiaLaborable(dataActual)) {
      diesComptats++;
    }
  }

  return dataActual;
}

/**
 * Calcula els dies laborables necessaris a partir de les hores totals i diàries
 * @param horesTotals - Número d'hores totals de pràctiques
 * @param horesDiaries - Número d'hores per dia
 * @returns Número de dies laborables necessaris
 */
export function calcularDiesLaborables(
  horesTotals: number,
  horesDiaries: number
): number {
  // TODO:  Completar aquesta funció
  // Divideix les hores totals entre les hores diàries
  // Recorda arrodonir cap amunt si el resultat no és exacte
  return Math.ceil(horesTotals / horesDiaries);
}

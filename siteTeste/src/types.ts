export type NavegacaoTelas = {
  Maquina: undefined;
  Agenda: { op: string; serie: string; color: string; moldes2:[string, string][]; };
  CadastrarMolde: { maquinas: Maquina[] };
};


export type Maquina = {
  id: string;
  op: string;
  serie: string;
  color: string;
  moldes2: [string, string][];
};

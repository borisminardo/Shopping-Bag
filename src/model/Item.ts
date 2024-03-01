export interface Item {
  id: number;
  name: string;
  heart: boolean;
  category: Category;
  owned: boolean;
}

export enum Category {
  FRUTTA_VERDURA = "Frutta e Verdura",
  CARNE_PESCE = "Carne e Pesce",
  INSCATOLATI = "Inscatolati",
  AFFETTATI = "Affettati",
  PANIFICIO = "Panificio",
  PRODOTTI_CASA = "Prodotti della casa",
  PRODOTTI_VEGANI = "Prodotti vegani",
  ALTRO = "Altro",
  NESSUNA = "Nessuna",
}

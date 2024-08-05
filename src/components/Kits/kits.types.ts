export type ModuleInfo = {
  name: string;
  quantity: number;
}

export type KitType = {
  title: string;
  earlyPrice?: string;
  fullPrice: string;
  priceSubtitle?: string;
  description: string;
  modules: ModuleInfo[];
  imageUri: string;
  preOrderUrl?: string;
  orderButton?: string;
};

export type KitsData = KitType[];

export type KitsProps = {
  className?: string;
  kitsData: KitsData;
};
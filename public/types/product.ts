export interface Product {
  id?: string,
  name: string,
  amount: number,
  units: string,
  metricAmount: number,
  metricUnits: string,
  bestBefore?: number,
}

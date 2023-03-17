export interface PaymentMethod{
    key:string
    value:string
}
export interface PaymentMethods{
    id:string,
    fields: PaymentMethod[]
}
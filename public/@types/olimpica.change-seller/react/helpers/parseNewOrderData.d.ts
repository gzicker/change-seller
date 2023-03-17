interface newOrderDataProps {
    data: any;
    items: any;
    sessionData: any;
    deliveryPolicy: string;
    localItems: any;
    simulation: any;
    targetSeller: string;
}
export declare const getDeliveryWindow: ({ logisticsInfo }: any) => {
    startDateUtc: any;
    endDateUtc: any;
};
export declare const setSellersData: (items: any, globalSeller: string) => any;
export declare const getTotal: (items: any, logisticInfo: any) => number;
export declare const parseLogisticInfo: (logisticInfo: any) => any;
export declare const parseNewOrderData: ({ data, items, sessionData, deliveryPolicy, localItems, simulation }: newOrderDataProps) => {
    itemsOrder: any;
    orderId: any;
    marketplaceOrderId: any;
    sellerOrder: any;
    email: any;
    shippingData: {
        address: {
            addressId: any;
            geoCoordinates: string;
        };
        logisticsInfoOrder: any;
    };
    value: number;
    paymentData: {
        payments: {
            paymentSystem: any;
            referenceValue: number;
            value: number;
            installments: any;
        }[];
    };
    coments: string;
};
export declare const valuesMessage: (totalizers: any) => string | null;
export {};

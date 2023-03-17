export declare const ORDERS_SCHEMA: {
    list: never[];
    items: never[];
    paymentData: {
        transactions: {
            payments: {
                paymentSystemName: string;
            }[];
        }[];
    };
};
export declare const TOTALS_TABLE: {
    properties: {
        id: {
            title: string;
        };
        name: {
            title: string;
        };
        value: {
            title: string;
            cellRenderer: ({ cellData }: any) => string | 0;
        };
    };
};
export declare const ORDERS_LIST_SCHEMA: {
    properties: {
        clientName: {
            title: string;
        };
        creationDate: {
            title: string;
            width: number;
            cellRenderer: ({ cellData }: any) => string;
        };
        orderId: {
            title: string;
            width: number;
        };
        totalItems: {
            title: string;
            with: number;
            cellRenderer: ({ rowData }: any) => any;
        };
        totalValue: {
            title: string;
            cellRenderer: ({ rowData }: any) => string;
        };
        status: {
            title: string;
            cellRenderer: ({ cellData }: any) => any;
        };
    };
};

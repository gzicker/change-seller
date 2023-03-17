import { Items } from '../typings/items';
import { Orders } from '../typings/orders';
interface Message {
    text: string;
}
interface MessagesProps {
    messages: Message[];
    optionalMessage?: string;
}
interface Date {
    date: string;
}
interface Price {
    price: number;
}
interface OrderSimulation {
    items: Items;
    order: Orders;
    sellerId: string;
    deliveryPolicy: string;
}
export declare const parseMessages: ({ messages, optionalMessage }: MessagesProps) => {
    text: string | undefined;
}[];
export declare const parseDateAndHour: ({ date }: Date) => string;
export declare const parsePrice: ({ price }: Price) => string | 0;
export declare const parseRemovedItems: ({ modifiedItems, originItems, simulationItems }: any) => {
    removedItemsNames: any;
    itemsWithouthInventary: any;
};
export declare const simulationData: ({ items, order, sellerId, deliveryPolicy }: OrderSimulation) => {
    items: any[];
    country: string;
    seller: string;
    geoCoordinates: string;
    paymentData: string;
    clientProfileData: {
        email: string;
    };
    sellerOrder: string;
};
export {};

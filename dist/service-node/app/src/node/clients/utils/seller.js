"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSellerInformation = void 0;
exports.checkSellerInformation = (sellerInformation) => {
    const seller = {
        Description: '',
        ExchangeReturnPolicy: '',
        DeliveryPolicy: '',
        UserName: '',
        Password: '',
        SecutityPrivacyPolicy: '',
        CNPJ: '',
        ArchiveId: '',
        UrlLogo: '',
        IsActive: true,
        FulfillmentSellerId: '',
        SellerType: 1,
        IsBetterScope: false,
        MerchantName: '',
    };
    return {
        ...seller,
        ...sellerInformation,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy91dGlscy9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxzQkFBc0IsR0FBRyxDQUFDLGlCQUF5QixFQUFFLEVBQUU7SUFDbEUsTUFBTSxNQUFNLEdBQUc7UUFDYixXQUFXLEVBQUUsRUFBRTtRQUNmLG9CQUFvQixFQUFFLEVBQUU7UUFDeEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLHFCQUFxQixFQUFFLEVBQUU7UUFDekIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLElBQUk7UUFDZCxtQkFBbUIsRUFBRSxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsYUFBYSxFQUFFLEtBQUs7UUFDcEIsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQTtJQUVELE9BQU87UUFDTCxHQUFHLE1BQU07UUFDVCxHQUFHLGlCQUFpQjtLQUNyQixDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsbGVyIH0gZnJvbSAnLi4vdHlwaW5ncy9jYXRhbG9nJ1xuXG5leHBvcnQgY29uc3QgY2hlY2tTZWxsZXJJbmZvcm1hdGlvbiA9IChzZWxsZXJJbmZvcm1hdGlvbjogU2VsbGVyKSA9PiB7XG4gIGNvbnN0IHNlbGxlciA9IHtcbiAgICBEZXNjcmlwdGlvbjogJycsXG4gICAgRXhjaGFuZ2VSZXR1cm5Qb2xpY3k6ICcnLFxuICAgIERlbGl2ZXJ5UG9saWN5OiAnJyxcbiAgICBVc2VyTmFtZTogJycsXG4gICAgUGFzc3dvcmQ6ICcnLFxuICAgIFNlY3V0aXR5UHJpdmFjeVBvbGljeTogJycsXG4gICAgQ05QSjogJycsXG4gICAgQXJjaGl2ZUlkOiAnJyxcbiAgICBVcmxMb2dvOiAnJyxcbiAgICBJc0FjdGl2ZTogdHJ1ZSxcbiAgICBGdWxmaWxsbWVudFNlbGxlcklkOiAnJyxcbiAgICBTZWxsZXJUeXBlOiAxLFxuICAgIElzQmV0dGVyU2NvcGU6IGZhbHNlLFxuICAgIE1lcmNoYW50TmFtZTogJycsXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnNlbGxlcixcbiAgICAuLi5zZWxsZXJJbmZvcm1hdGlvbixcbiAgfVxufVxuIl19
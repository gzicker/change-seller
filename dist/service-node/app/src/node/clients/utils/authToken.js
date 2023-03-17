"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthToken = void 0;
exports.getAuthToken = (ctx, method) => {
    switch (method) {
        case 'STORE_TOKEN':
            return ctx.storeUserAuthToken;
        case 'ADMIN_TOKEN':
            return ctx.adminUserAuthToken;
        case 'AUTH_TOKEN':
            return ctx.authToken;
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aFRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy91dGlscy9hdXRoVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxZQUFZLEdBQUcsQ0FBQyxHQUFjLEVBQUUsTUFBa0IsRUFBRSxFQUFFO0lBQ2pFLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxhQUFhO1lBQ2hCLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFBO1FBRS9CLEtBQUssYUFBYTtZQUNoQixPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQTtRQUUvQixLQUFLLFlBQVk7WUFDZixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUE7UUFFdEI7WUFDRSxPQUFPLElBQUksQ0FBQTtLQUNkO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU9Db250ZXh0IH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG5pbXBvcnQgeyBBdXRoTWV0aG9kIH0gZnJvbSAnLi4vdHlwaW5ncy90b2tlbnMnXG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoVG9rZW4gPSAoY3R4OiBJT0NvbnRleHQsIG1ldGhvZDogQXV0aE1ldGhvZCkgPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ1NUT1JFX1RPS0VOJzpcbiAgICAgIHJldHVybiBjdHguc3RvcmVVc2VyQXV0aFRva2VuXG5cbiAgICBjYXNlICdBRE1JTl9UT0tFTic6XG4gICAgICByZXR1cm4gY3R4LmFkbWluVXNlckF1dGhUb2tlblxuXG4gICAgY2FzZSAnQVVUSF9UT0tFTic6XG4gICAgICByZXR1cm4gY3R4LmF1dGhUb2tlblxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiJdfQ==
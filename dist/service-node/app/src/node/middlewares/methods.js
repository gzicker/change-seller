"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodNotAllowed = void 0;
const TEN_SECONDS_S = 10;
function methodNotAllowed(ctx) {
    ctx.status = 405;
    ctx.set('cache-control', `max-age=${TEN_SECONDS_S}`);
}
exports.methodNotAllowed = methodNotAllowed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL21pZGRsZXdhcmVzL21ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBRXhCLFNBQWdCLGdCQUFnQixDQUFDLEdBQVk7SUFDekMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFIRCw0Q0FHQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRFTl9TRUNPTkRTX1MgPSAxMFxuXG5leHBvcnQgZnVuY3Rpb24gbWV0aG9kTm90QWxsb3dlZChjdHg6IENvbnRleHQpIHtcbiAgICBjdHguc3RhdHVzID0gNDA1XG4gICAgY3R4LnNldCgnY2FjaGUtY29udHJvbCcsIGBtYXgtYWdlPSR7VEVOX1NFQ09ORFNfU31gKVxufSJdfQ==
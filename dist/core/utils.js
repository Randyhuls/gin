var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const isNullish = (value) => {
    const EPSILON = 0.0001;
    return Math.sign(value) === 1 ? value < EPSILON : !(value < -EPSILON);
};
export const roundTwoDecimal = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100;
};
export const importFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(path, { method: 'GET' });
        if (!request.ok)
            return Promise.reject(request.statusText);
        return request.json();
    }
    catch (err) {
        return Promise.reject(err);
    }
});
//# sourceMappingURL=utils.js.map
"use strict";
// PRISMA
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUsers(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.create({
            data: {
                username,
                password
            }
        });
        console.log(res);
    });
}
const findUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.users.findUnique({
            where: { id },
            select: {
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    }
    catch (_a) {
        console.log('unable to find users');
    }
});
function updateUser(id, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.update({
            where: {
                id,
            },
            data: {
                firstName,
                lastName
            },
            select: {
                firstName: true,
                lastName: true,
                id: true
            }
        });
        console.log(res);
    });
}
function delUsers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = yield prisma.users.delete({
            where: {
                id,
            },
        });
    });
}
// delUsers(2);
insertUsers('user1', 'user12345');

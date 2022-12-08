"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_entity_1 = require("./entities/owner.entity");
const owners_resolver_1 = require("./owners.resolver");
const owners_service_1 = require("./owners.service");
let OwnersModule = class OwnersModule {
};
OwnersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([owner_entity_1.Owner])],
        providers: [owners_resolver_1.OwnersResolver, owners_service_1.OwnersService],
        exports: [owners_service_1.OwnersService]
    })
], OwnersModule);
exports.OwnersModule = OwnersModule;
//# sourceMappingURL=owners.module.js.map
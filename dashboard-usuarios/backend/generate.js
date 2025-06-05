import { faker } from '@faker-js/faker/locale/pt_BR';
import lodash from 'lodash';
import fs from 'fs';

const people = lodash.times(50, function(n){
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        id:
    }
})
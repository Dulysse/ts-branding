![https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png)

# 🛠 ts-branding 🛠

#### <i>Decorate `object` properties and discover the power of Typescript brands ✨</i>

## How to use ? 🤔

### ✅ With EcmaScript ✅

```tsx
import { Op, Apk, Helper } from "@dulysse1/ts-branding";
// now you can decorate your forms!
```

## Documentation 🧗

#### 👉 Create `type/interface` and decorate properties 🎨

```tsx
import { Op } from "@dulysse1/ts-branding";

interface User {
	id: number;
	name: Op.Required<string>; // <= Operator Required
	description: Op.Optional<string>; // <= Operator Optional
	created: Date;
}

const user: User = {
	id: 1,
	name: "Martin", // <= keep string properties!
	description: "This is Martin!", // <= keep string properties!
	created: new Date(),
};
```

#### 👉 Apply `Applicators` to trigger Brand functions 🔧

```tsx
import { Apk } from "@dulysse1/ts-branding";

type CreationFormUser = Apk.CreationForm<User>;
/**
 * CreationFormUser: {
 *    name: string; // <= Required in form
 *    description?: string | undefined; // <= Optional in form
 * }
 */

type ModificationFormUser = Apk.ModificationForm<User>;
/**
 * ModificationFormUser: {
 *    name?: string | undefined; // <= Optional in form
 *    description?: string | undefined; // <= Optional in form
 * }
 */
```

#### 👉 Use `Applicators` into functions 🚀

```tsx
import { Op, Apk } from "@dulysse1/ts-branding";

interface User {
  id: Op.PrimaryKey<number>; // <= Operator for Primary Key
  name: string;
}

function getById(id: Apk.PrimaryKeyType<User>) {...} // <= id is type number
```

#### 👉 Use more property operators 🖌️

```tsx
import { Op, Apk } from "@dulysse1/ts-branding";

interface User {
	id: Op.PrimaryKey<number>;
	name: Op.Required<string>;
	description: Op.Optional<string>;
	created: Op.Omit<Date>;
}

type OmittedUser = Apk.Omitted<User>;
/**
 * OmittedUser: {
 *    id: Op.PrimaryKey<number>;
 *    name: Op.Required<string>;
 *    description: Op.Optional<string>;
 * }
 */

type CleanedUser = Apk.Cleaned<User>;
/**
 * CleanedUser: {
 *    id: number;
 *    name: string;
 *    description: string;
 *    created: Date;
 * }
 */
```

#### 👉 Now you can use it for `strong type verification` on your REST client 💪

```tsx
import { Op, Apk, Helper } from "@dulysse1/ts-branding";

export interface User {
  id: Op.PrimaryKey<number>;
  name: Op.Required<string>;
  description: Op.Optional<string>;
  created: Date;
}

export class UserService implements Helper.Plugin<User> {
  public getById(id: string) {...} // ERROR ! ID should be a number!
  public create(data: Apk.CreationForm<User>) {...} // OK!
}
```

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com

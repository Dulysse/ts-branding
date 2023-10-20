![https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png)

# 🛠 ts-branding 🛠

#### <i>Decorate `object` properties and discover the power of Typescript brands ✨</i>

## Getting Started 🆙

### Prerequisites

Install `Typescript` on your project

```shell
npm install typescript --save-dev
```

`Or`

```shell
yarn add typescript --dev
```

`Or`

```shell
pnpm i -D typescript
```

For best results, add this to your `tsconfig.json`

```json
{
	"compilerOptions": {
		"strictNullChecks": true, // highly recommended (required by few utilities)
		"strict": true, // this is optional, but enable whenever possible
		"lib": ["es2015"] // this is the lowest supported standard library
	}
}
```

## How to use ? 🤔

### With EcmaScript module ✅

```tsx
import type { Op, Apk, Helper } from "@dulysse1/ts-branding";
// now you can decorate your forms!
```

## Documentation 🧗

#### 👉 Create `type/interface` and decorate properties 🎨

```tsx
import type { Op } from "@dulysse1/ts-branding";

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
import type { Apk } from "@dulysse1/ts-branding";

type CreationFormUser = Apk.CreationForm<User>;
// CreationFormUser: {
// 	name: string; // <= Required in form
// 	description?: string | undefined; // <= Optional in form
// }

type ModificationFormUser = Apk.ModificationForm<User>;
// ModificationFormUser: {
// 	name?: string | undefined; // <= Optional in form
// 	description?: string | undefined; // <= Optional in form
// }
```

#### 👉 Use `Applicators` into functions 🚀

```tsx
import type { Op, Apk } from "@dulysse1/ts-branding";

interface User {
  id: Op.PrimaryKey<number>; // <= Operator for Primary Signature
  name: string;
}

function getById(id: Apk.PrimaryKeyType<User>) {...} // <= id is type number
```

#### 👉 Use more property operators 🖌️

```tsx
import type { Op, Apk } from "@dulysse1/ts-branding";

interface User {
	id: Op.PrimaryKey<number>;
	name: Op.Required<string>;
	description: Op.Optional<string>;
	created: Op.Omit<Date>;
	activated: Op.Pick<boolean>;
}

type PickedUser = Apk.Picked<User>;
// PickedUser: {
//    activated: boolean;
// }

type OmittedUser = Apk.Omitted<User>;
// OmittedUser: {
// 		id: Op.PrimaryKey<number>;
// 		name: Op.Required<string>;
// 	description: Op.Optional<string>;
// }

type CleanedUser = Apk.Cleaned<User>;
// CleanedUser: {
// 	id: number;
// 	name: string;
// 	description: string;
// 	created: Date;
// }
```

#### 👉 Now you can use it for `strong type verification` on your REST client 💪

```tsx
import type { Op, Apk, Helper } from "@dulysse1/ts-branding";

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

#### 👉 Use different `Signature` to use multiple type `applicators` 📋

```tsx
import type { Op, Apk, Helper } from "@dulysse1/ts-branding";

export interface User {
	name1: Op.Required<string, "user1">;
	name2: Op.Optional<string, "user2">;
	demo: Op.Picked<boolean, "user1">;
}

type CreationFormUser1 = Apk.CreationForm<User, "user1">;
// CreationFormUser1: {
//    name1: string; // <= Required in form with signature "user1"
// }

type CreationFormUser2 = Apk.CreationForm<User, "user2">;
//  CreationFormUser2: {
//     name2?: string | undefined; // <= Required in form with signature "user2"
//  }

type PickedUser1 = Apk.Picked<User, "user1">;
//  PickedUser1: {
//     demo: boolean;
//  }
```

#### 👉 You can create your object in complete safety with the `SafeObject` helper! ✋🛑

```tsx
import type { Op, Helper } from "@dulysse1/ts-branding";

// UNSAFE!
export interface User {
	id: Op.PrimaryKey<number>;
	id2: Op.PrimaryKey<number>; // ❌ Two primary keys may be a mistake!
	// ------------------------
	name: Op.Required<Op.Optional<string>>; // ❌ A required type may not be optional!
}

// ✅ SAFE!
export type User = Helper.SafeObject<{
	id: Op.PrimaryKey<number>;
	id2: Op.PrimaryKey<number>;
}>; // ❌ NOT OK! Error: one primary key only!

export type User = Helper.SafeObject<{
	name: Op.Required<Op.Optional<string>>;
}>; // ❌ NOT OK! Error: cannot be required and optional

export type User = Helper.SafeObject<{
	id: Op.PrimaryKey<number>;
	name: Op.Optional<string>;
	description?: Op.Optional<string>;
}>; // ✅ OK!
```

#### 👉 And many more complex types! 🧠

```tsx
import type { Apk, Op, Helper } from "@dulysse1/ts-branding";

declare type IDemo = Helper.SafeObject<{
	id: Op.PrimaryKey<number>;
	name: string;
	media: Helper.SafeObject<{
		name: Op.Required<string>;
		type: Op.Optional<"png" | "jpg">;
	}>;
}>;

export declare type IDemoMedia = Apk.CreationForm<IDemo["media"]>;
// IDemoMedia: {
//   name: string;
//   type?: "png" | "jpg" | undefined;
// }
```

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com

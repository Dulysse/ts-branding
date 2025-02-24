> [!WARNING]
> Since 1.1.0 version `Apk` is now called `Infer` and the methods `Apk.PrimaryKeyType` and `Brand.PrimaryKey` are now called `Infer.PrimaryKey` and `Brand.Pk`

> [!WARNING]
> Since 1.2.0 version `Op` is now called `Brand`

![https://raw.githubusercontent.com/Dulysse/ts-branding/refs/heads/main/assets/logo.svg](https://raw.githubusercontent.com/Dulysse/ts-branding/refs/heads/main/assets/logo.svg)

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
import type { Brand, Infer, Helper } from "@dulysse1/ts-branding";
// now you can decorate your forms!
```

## Documentation 🧗

#### 👉 Create `type/interface` and decorate properties 🎨

```tsx
import type { Brand } from "@dulysse1/ts-branding";

interface User {
	id: number;
	name: Brand.Required<string>; // <= Operator Required
	description: Brand.Optional<string>; // <= Operator Optional
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
import type { Infer } from "@dulysse1/ts-branding";

type ApplyFormUser = Infer.ApplyForm<User>;
// ApplyFormUser: {
// 	name: string; // <= Required in form
// 	description?: string | undefined; // <= Optional in form
// }

type ApplyPartialFormUser = Infer.ApplyPartialForm<User>;
// ApplyPartialFormUser: {
// 	name?: string | undefined; // <= Optional in form
// 	description?: string | undefined; // <= Optional in form
// }
```

#### 👉 Use `Applicators` into functions 🚀

```tsx
import type { Brand, Infer } from "@dulysse1/ts-branding";

interface User {
  id: Brand.Pk<number>; // <= Operator for Primary Signature
  name: string;
}

function getById(id: Infer.PrimaryKey<User>) {...} // <= id is type number
```

#### 👉 Use more property brands 🖌️

```tsx
import type { Brand, Infer } from "@dulysse1/ts-branding";

interface User {
	id: Brand.Pk<number>;
	name: Brand.Required<string>;
	description: Brand.Optional<string>;
	created: Brand.Omit<Date>;
	activated: Brand.Pick<boolean>;
}

type PickedUser = Infer.Picked<User>;
// PickedUser: {
//    activated: boolean;
// }

type OmittedUser = Infer.Omitted<User>;
// OmittedUser: {
// 		id: Brand.Pk<number>;
// 		name: Brand.Required<string>;
// 	description: Brand.Optional<string>;
// }

type CleanedUser = Infer.Cleaned<User>;
// CleanedUser: {
// 	id: number;
// 	name: string;
// 	description: string;
// 	created: Date;
// }
```

#### 👉 Now you can use it for `strong type verification` on your REST client 💪

```tsx
import type { Brand, Infer, Helper } from "@dulysse1/ts-branding";

export interface User {
  id: Brand.Pk<number>;
  name: Brand.Required<string>;
  description: Brand.Optional<string>;
  created: Date;
}

export class UserService implements Helper.Plugin<User> {
  public getById(id: string) {...} // ERROR ! ID should be a number!
  public create(data: Infer.ApplyForm<User>) {...} // OK!
}
```

#### 👉 Use different `Signature` to use multiple type `applicators` 📋

```tsx
import type { Brand, Infer, Helper } from "@dulysse1/ts-branding";

export interface User {
	name1: Brand.Required<string, "user1">;
	name2: Brand.Optional<string, "user2">;
	demo: Brand.Picked<boolean, "user1">;
}

type ApplyFormUser1 = Infer.ApplyForm<User, "user1">;
// ApplyFormUser1: {
//    name1: string; // <= Required in form with signature "user1"
// }

type ApplyFormUser2 = Infer.ApplyForm<User, "user2">;
//  ApplyFormUser2: {
//     name2?: string | undefined; // <= Required in form with signature "user2"
//  }

type PickedUser1 = Infer.Picked<User, "user1">;
//  PickedUser1: {
//     demo: boolean;
//  }
```

#### 👉 You can create your object in complete safety with the `SafeObject` helper! ✋🛑

```tsx
import type { Brand, Helper } from "@dulysse1/ts-branding";

// UNSAFE!
export interface User {
	id: Brand.Pk<number>;
	id2: Brand.Pk<number>; // ❌ Two primary keys may be a mistake!
	// ------------------------
	name: Brand.Required<Brand.Optional<string>>; // ❌ A required type may not be optional!
}

// ✅ SAFE!
export type User = Helper.SafeObject<{
	id: Brand.Pk<number>;
	id2: Brand.Pk<number>;
}>; // ❌ NOT OK! Error: one primary key only!

export type User = Helper.SafeObject<{
	name: Brand.Required<Brand.Optional<string>>;
}>; // ❌ NOT OK! Error: cannot be required and optional

export type User = Helper.SafeObject<{
	id: Brand.Pk<number>;
	name: Brand.Optional<string>;
	description?: Brand.Optional<string>;
}>; // ✅ OK!
```

#### 👉 And many more complex types! 🧠

```tsx
import type { Infer, Brand, Helper } from "@dulysse1/ts-branding";

declare type IDemo = Helper.SafeObject<{
	id: Brand.Pk<number>;
	name: string;
	media: Helper.SafeObject<{
		name: Brand.Required<string>;
		type: Brand.Optional<"png" | "jpg">;
	}>;
}>;

export declare type IDemoMedia = Infer.ApplyForm<IDemo["media"]>;
// IDemoMedia: {
//   name: string;
//   type?: "png" | "jpg" | undefined;
// }
```

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com

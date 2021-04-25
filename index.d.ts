// Type definitions for basic-authorization-header 0.2.7
// Project: https://github.com/wilmoore/basic-authorization-header
// Definitions by: Nico Finkernagel <https://github.com/gruselhaus/>

module "basic-authorization-header" {
  export default function basic(user: string, pass: string): string;
}

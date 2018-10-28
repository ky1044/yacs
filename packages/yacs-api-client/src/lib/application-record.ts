import {
  Model,
  SpraypaintBase,
  Attr,
  BelongsTo,
  HasMany
} from "spraypaint"

export class ApplicationRecord extends SpraypaintBase {
  static baseUrl = "https://nightly.yacs.io"
  static apiNamespace = "/api/v6"
}
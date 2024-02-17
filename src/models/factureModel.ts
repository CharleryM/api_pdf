import { INTEGER, STRING } from "sequelize";
import {
  Table,
  Model,
  Column,
  AllowNull,
  AutoIncrement,
  NotEmpty,
  PrimaryKey,
} from "sequelize-typescript";


@Table({
  tableName: "facture",
})

export class Facture extends Model<Facture>{
  @AutoIncrement
  @PrimaryKey
  @Column(INTEGER)
  id!: number

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  title!: string

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  client!: string

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  owner!: string

  @AllowNull(false)
  @NotEmpty
  @Column(INTEGER)
  sold!: number
}
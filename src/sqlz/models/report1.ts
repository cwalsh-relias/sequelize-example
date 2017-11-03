import * as Sequelize from 'sequelize'

export interface Report1Attributes {
  report1Id?: number
  report1Name?: string
}

export interface Report1Instance extends Sequelize.Instance<Report1Attributes> {
  report1Id: number
  report1Name: string
}

export default function defineModel(sequelize: Sequelize.Sequelize, DataTypes) {
  const Report1 = sequelize.define('Report1', {
    report1Id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    report1Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, { timestamps: false, freezeTableName: true })

  return Report1
}

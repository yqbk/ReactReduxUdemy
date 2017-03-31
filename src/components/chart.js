import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines'

function avarage(data) {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{ avarage(props.data) } { props.units }</div>
    </div>
  )
}
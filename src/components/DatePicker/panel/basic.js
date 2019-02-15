export default function GeneratorRows(_h, type, list, itemNum) {
  let rows = []
  let row = []

  list.forEach((elem, index) => {
    let dom = index < itemNum ? 'th' : 'td'
    let className = index < itemNum && type === 'day' ? 'date-table-head__item' : `date-table-data__item ${elem.type}`
    let label = elem.label || elem.value

    row.push(
      _h(
        dom, {
          attrs: {
            class: className,
            dateType: elem.type,
            index: elem.value,
          }
        },
        label
      )
    )
    if (row.length % itemNum === 0 && row.length) {

      rows.push(
        _h(
          'tr', {
            attrs: {
              class: "panel-content-row"
            }
          },
          row
        )
      )
      row = []
    }
  })
  return rows
}

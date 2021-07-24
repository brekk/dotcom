export const Ol = props => <ol {...props}>{props && props.children}</ol>
export const Ul = props => <ul {...props}>{props && props.children}</ul>
export const Li = props => <li {...props}>{props && props.children}</li>
export const render = curry((C, props) => <C {...props} />)

export const List = ({ Wrapper: L = Ul, list = [], Item = Li, ...props }) => (
  <L {...props}>
    {list.map((x, idx) => (
      <Item {...x} key={idx} />
    ))}
  </L>
)

export const tailIsArray = both(isArray, pipe(last, isArray))

export const describedList = ([key, data]) =>
  pipe(
    ifElse(
      tailIsArray,
      ([item, list]) => (
        <List list={[item]} Wrapper={PkgFeatures}>
          {render(List, { list: [item], Wrapper: PkgFeatures, Item: Debug })}
        </List>
      ),
      render(Li)
    )
  )(data)

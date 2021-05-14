import css from './a.module.css'

function A() {
  return <div className={css.root}>this is A page</div>
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.zhihu.com/market/vip_recommend/categories?offset=3`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default A
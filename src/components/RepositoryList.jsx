const repositoryName = "unform 2"
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar Repository
          </a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar Repository
          </a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar Repository
          </a>
        </li>
      </ul>
    </section>
  )
}

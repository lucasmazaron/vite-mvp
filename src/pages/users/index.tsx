import { User, useUserList } from "../../hooks/useUserList";

export function UsersPage() {
  const [users] = useUserList();
  return (
    <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Usuários</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nome</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users ? users.map((user: User) =>(
                      <tr key={user.id}>
                        <td  className="">
                          <p className="text-xs font-weight-bold mb-0">{user.id}</p>
                        </td>
                        <td className="align-middle text-left">
                          <span className="text-secondary text-xs font-weight-bold">{user.name}</span>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className={`badge badge-sm ${user.status === 'Ativo' ? "bg-gradient-success" : "bg-gradient-danger" }` } >{user.status}</span>
                        </td>
                      </tr>
                    )): <tr> ...Nenhum usuário cadastrado</tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
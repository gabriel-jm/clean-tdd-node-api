class AuthUseCase {
  async auth (email) {
    if (!email) {
      throw new Error('')
    }
  }
}

describe('Auth UseCase', () => {
  test('should throw an error if no email is provided', () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()

    expect(promise).rejects.toThrow()
  })
})

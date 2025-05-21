import { LoginForm } from '@/features/login'

import { Container } from '@/shared/ui'

export function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center py-4">
      <Container>
        <div className="bg-background text-foreground mx-auto w-full max-w-sm space-y-4 rounded-lg border p-6 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold">Авторизоваться</h3>
            <p className="text-muted-foreground text-sm">
              Введите ниже свое имя пользователя и пароль, чтобы войти в свою
              учетную запись.
            </p>
          </div>

          <LoginForm />
        </div>
      </Container>
    </div>
  )
}

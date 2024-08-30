"use client";

export default function PrivacyPolicy() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDIxcDQwYXhzaHA1dDZqYTlhenYzeDQ0MDcycmR4ZXowYnAzbmFiYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M2SKr24lAOOmnnnBP6/giphy.gif')",
      }}
    >
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <h1 className="text-4xl font-bold text-slate-50 mb-8 text-center">
          Política de Privacidade
        </h1>

        <div className="shadow overflow-hidden sm:rounded-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introdução
            </h2>
            <p className="text-white">
              Como desenvolvedor Full Stack, levo a privacidade e segurança dos
              dados dos usuários muito a sério. Esta Política de Privacidade
              descreve como coleto, utilizo e protejo as informações dos
              usuários ao utilizar minhas aplicações, sites, e APIs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Coleta de Informações
            </h2>
            <p className="text-white">
              Durante o desenvolvimento e manutenção de minhas aplicações, posso
              coletar diferentes tipos de dados:
            </p>
            <ul className="list-disc list-inside text-white mt-4">
              <li>
                <strong>Informações Pessoais:</strong> Quando os usuários se
                registram ou interagem com o site, posso coletar informações
                como nome, e-mail e outros detalhes necessários para o
                funcionamento do serviço.
              </li>
              <li>
                <strong>Logs de Servidor:</strong> Para monitoramento e
                segurança, os logs do servidor podem registrar endereços IP,
                tipo de navegador, páginas visitadas, e outros dados de uso.
              </li>
              <li>
                <strong>Cookies:</strong> Utilizo cookies para armazenar
                informações de sessão, preferências do usuário e para fins
                analíticos.
              </li>
              <li>
                <strong>APIs de Terceiros:</strong> Se utilizar APIs de
                terceiros (como Google, Facebook, etc.), dados podem ser
                coletados conforme as políticas de privacidade desses serviços.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Uso das Informações
            </h2>
            <p className="text-white">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc list-inside text-white mt-4">
              <li>Personalizar a experiência do usuário nas aplicações.</li>
              <li>Monitorar e melhorar a performance das aplicações.</li>
              <li>Garantir a segurança e prevenir fraudes.</li>
              <li>Fornecer suporte técnico e responder a solicitações.</li>
              <li>Cumprir com obrigações legais ou regulamentares.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-white">
              Não compartilho informações pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc list-inside text-white mt-4">
              <li>
                Quando necessário para cumprir a lei ou uma ordem judicial.
              </li>
              <li>
                Com fornecedores e parceiros que auxiliam na operação das
                aplicações (ex: provedores de hospedagem, APIs externas), sempre
                respeitando acordos de confidencialidade.
              </li>
              <li>
                No caso de fusão, aquisição ou venda de ativos, onde as
                informações podem ser transferidas ao novo proprietário.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Segurança de Dados
            </h2>
            <p className="text-white">
              Implemento medidas de segurança como criptografia, autenticação
              multifator e backups regulares para proteger as informações dos
              usuários. No entanto, é importante lembrar que nenhum método de
              transmissão pela internet ou armazenamento eletrônico é 100%
              seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-white">
              Os usuários têm o direito de acessar, corrigir ou excluir suas
              informações pessoais. Se desejar exercer esses direitos, entre em
              contato diretamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Cookies e Tecnologias Semelhantes
            </h2>
            <p className="text-white">
              Utilizo cookies e tecnologias semelhantes para analisar o tráfego,
              personalizar conteúdo e anúncios, e melhorar a experiência do
              usuário. Os usuários podem controlar o uso de cookies diretamente
              em seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Alterações nesta Política
            </h2>
            <p className="text-white">
              Esta Política de Privacidade pode ser atualizada periodicamente.
              As alterações serão notificadas via e-mail ou por meio de um aviso
              em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contato
            </h2>
            <p className="text-white">
              Para mais informações ou dúvidas sobre esta Política de
              Privacidade, entre em contato através de [email@example.com].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

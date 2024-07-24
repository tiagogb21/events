Tabelas do Banco de Dados:

    Users

        id (PK, UUID): Identificador único do usuário.
        name (VARCHAR): Nome do usuário.
        email (VARCHAR, UNIQUE): E-mail do usuário.
        password (VARCHAR): Senha do usuário, armazenada de forma segura (hash).
        role (ENUM: 'user', 'organizer'): Papel do usuário na plataforma.

    Events

        id (PK, UUID): Identificador único do evento.
        title (VARCHAR): Título do evento.
        description (TEXT): Descrição detalhada do evento.
        date (TIMESTAMP): Data e hora do evento.
        organizer_id (FK, UUID): Identificador do organizador do evento.
        status (ENUM: 'upcoming', 'live', 'completed'): Status do evento.

    Participants

        id (PK, UUID): Identificador único do participante.
        event_id (FK, UUID): Identificador do evento.
        user_id (FK, UUID): Identificador do usuário.

    Chats

        id (PK, UUID): Identificador único da mensagem.
        event_id (FK, UUID): Identificador do evento.
        user_id (FK, UUID): Identificador do usuário que enviou a mensagem.
        message (TEXT): Conteúdo da mensagem.
        timestamp (TIMESTAMP): Data e hora da mensagem.

Regras de Negócio:

    1 - Autenticação e Autorização:

        [] - Os usuários devem se registrar com um e-mail único e uma senha.
        [] - A senha deve ser armazenada de forma segura (hash + salt).
        [] - Os usuários devem fazer login para acessar a plataforma.
        [] - Apenas organizadores podem criar e gerenciar eventos.

    2 - Criação e Gerenciamento de Eventos:

        [] - Organizadores podem criar eventos com título, descrição e data.
        [] - Eventos podem ser atualizados ou cancelados antes da data.
        [] - O status do evento muda automaticamente de 'upcoming' para 'live' na data e hora do evento, e para 'completed' após o término.

    3 - Participação em Eventos:

        [] - Usuários podem se inscrever em eventos.
        [] - O número de participantes pode ser limitado pelo organizador.
        [] - Apenas participantes inscritos podem acessar o evento quando ele estiver 'live'.

    4 - Interação em Tempo Real:

        [] - Participantes podem enviar mensagens de chat durante o evento.
        [] - O chat é atualizado em tempo real usando WebSockets.

    5 - Histórico de Eventos:

        [] - Usuários podem visualizar eventos passados em que participaram.
        [] - Organizadores podem visualizar e analisar a participação e o engajamento nos seus eventos.

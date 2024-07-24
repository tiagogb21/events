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

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.15
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: event_type; Type: TYPE; Schema: public; Owner: alfred
--

CREATE TYPE public.event_type AS ENUM (
    'WEDDING'
);


ALTER TYPE public.event_type OWNER TO alfred;

SET default_tablespace = '';

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: alfred
--

CREATE TABLE public.accounts (
    id integer NOT NULL,
    auth0_id text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    name text NOT NULL,
    email_verified boolean DEFAULT false NOT NULL
);


ALTER TABLE public.accounts OWNER TO alfred;

--
-- Name: TABLE accounts; Type: COMMENT; Schema: public; Owner: alfred
--

COMMENT ON TABLE public.accounts IS 'A user account';


--
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: alfred
--

CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO alfred;

--
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alfred
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: alfred
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name text NOT NULL,
    type public.event_type NOT NULL,
    date date,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    created_by integer NOT NULL
);


ALTER TABLE public.events OWNER TO alfred;

--
-- Name: TABLE events; Type: COMMENT; Schema: public; Owner: alfred
--

COMMENT ON TABLE public.events IS 'An event (wedding, birthday party)';


--
-- Name: events_accounts; Type: TABLE; Schema: public; Owner: alfred
--

CREATE TABLE public.events_accounts (
    id integer NOT NULL,
    event_id integer,
    account_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.events_accounts OWNER TO alfred;

--
-- Name: events_accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: alfred
--

CREATE SEQUENCE public.events_accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_accounts_id_seq OWNER TO alfred;

--
-- Name: events_accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alfred
--

ALTER SEQUENCE public.events_accounts_id_seq OWNED BY public.events_accounts.id;


--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: alfred
--

CREATE SEQUENCE public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO alfred;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alfred
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: alfred
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO alfred;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: alfred
--

CREATE SEQUENCE public.knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO alfred;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alfred
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: alfred
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO alfred;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: alfred
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO alfred;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alfred
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: events_accounts id; Type: DEFAULT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events_accounts ALTER COLUMN id SET DEFAULT nextval('public.events_accounts_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: accounts accounts_auth0_id_unique; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_auth0_id_unique UNIQUE (auth0_id);


--
-- Name: accounts accounts_email_unique; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_email_unique UNIQUE (email);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: events_accounts events_accounts_event_id_account_id_unique; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events_accounts
    ADD CONSTRAINT events_accounts_event_id_account_id_unique UNIQUE (event_id, account_id);


--
-- Name: events_accounts events_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events_accounts
    ADD CONSTRAINT events_accounts_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: events_accounts_account_id_index; Type: INDEX; Schema: public; Owner: alfred
--

CREATE INDEX events_accounts_account_id_index ON public.events_accounts USING btree (account_id);


--
-- Name: events_accounts_event_id_index; Type: INDEX; Schema: public; Owner: alfred
--

CREATE INDEX events_accounts_event_id_index ON public.events_accounts USING btree (event_id);


--
-- Name: events_accounts events_accounts_account_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events_accounts
    ADD CONSTRAINT events_accounts_account_id_foreign FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: events_accounts events_accounts_event_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events_accounts
    ADD CONSTRAINT events_accounts_event_id_foreign FOREIGN KEY (event_id) REFERENCES public.events(id);


--
-- Name: events events_created_by_foreign; Type: FK CONSTRAINT; Schema: public; Owner: alfred
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_created_by_foreign FOREIGN KEY (created_by) REFERENCES public.accounts(id);


--
-- PostgreSQL database dump complete
--


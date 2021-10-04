FROM postgres:alpine

ENV POSTGRES_DB flave 
ENV POSTGRES_USER flave 
ENV POSTGRES_PASSWORD flave

COPY create_tables.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432


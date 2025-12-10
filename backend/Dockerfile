FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy database project
COPY database/database.csproj ./database/
# Copy backend project
COPY backend/backend.csproj ./backend/

# Restore dependencies
WORKDIR /app/backend
RUN dotnet restore

# Copy everything and build
WORKDIR /app
COPY database ./database/
COPY backend ./backend/

WORKDIR /app/backend
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/backend/out .

# Expose port
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "backend.dll"]

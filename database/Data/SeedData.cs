using MairaAndShaheer.Database.Models;

namespace MairaAndShaheer.Database.Data;

public static class SeedData
{
    public static void Seed(DatabaseContext context)
    {
        // Clear existing photos
        if (context.Photos.Any())
        {
            Console.WriteLine("Removing existing photos...");
            context.Photos.RemoveRange(context.Photos);
            context.SaveChanges();
            Console.WriteLine("Existing photos removed.");
        }

        var photos = new List<Photo>
        {
            new Photo
            {
                Title = "Chotta sa Pumpkins",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/01.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8wMS5qcGVnIiwiaWF0IjoxNzY1MjQ2MzcxLCJleHAiOjE3OTY3ODIzNzF9.7Wry8PQatW9Pq6QHnXCxqsVQaRUnj5ZX-NEkQ-FZyNA",
                Description = "November 11th, 2025 - Jaani and I painted pumpkins together! I had so much fun going to Hobby Lobby, getting paint and paint brushes then driving home on call together. Once we got home, I streamed 'Too much with Kajol and Twinkle' and togeether we laughed and painted our pumpkins. Chotta sa Snoopy and choota sa Kirby - both turned out so cute! Such a fun memory with my love.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 1), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Our attempt at Diamond Art",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/07.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8wNy5qcGVnIiwiaWF0IjoxNzY1MjQ2MzgxLCJleHAiOjE3OTY3ODIzODF9.f6HrFsKmVep2ipE5OEviOUFgP-IlUptKeerd9_b7QNc",
                Description = "November 7th, 2025 - Jaani and I tried our hand at diamond art! I picked a Sea Turtle and Jaani picked a Peacock. I had a lot of fun... but we only finished 1% of the painting... Inshallah next year, we'll get to finish the whole thing. But, I got the cutest photo of Jaani in a big, red bow. You are so cute meri Jaan. You have no idea how much I love these silly photos of you.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 7), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Jaani's Hat",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/20.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8yMC5qcGVnIiwiaWF0IjoxNzY1MjQ2MzkzLCJleHAiOjE3OTY3ODIzOTN9.oNzwaJjIUuJwWdGL2kSvy0pOYux9oJIpwCULkhFY8zU",
                Description = "November 20th, 2025 - Jaani got this big hat. I'm not sure if it's a hat actually but it looked so funny on your head. I laughed so hard seeing you put it on and dance around. You make me laugh so much. ",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 20), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Jaani visit's New York",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/22.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8yMi5qcGVnIiwiaWF0IjoxNzY1MjQ2NDAzLCJleHAiOjE3OTY3ODI0MDN9.9yfwL4BKz-BESAlKpi89YhA1Zi8JQjw3SUPLo_R6mv4",
                Description = "November 22nd, 2025 - Jaani is a big billi and going off to so many cool places. Today she went to New York City for a school trip. I missed you a lot but I was so happy to see you having so much fun. I loved all the cute photos you sent of the animals wearing their boogie clothes.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 22), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "The most Beautiful Girl in the World",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/28.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8yOC5qcGVnIiwiaWF0IjoxNzY1MjQ2NDE0LCJleHAiOjE3OTY3ODI0MTR9.BwulqI1RllJWGZcoX4JqXrahNIfbM8SYlb8o6HUakuE",
                Description = "November 29th, 2025 - Jaani you are so beautiful. Sometimes I just stare at you and I thank Allah for bringing you into my life. I've never seen someone as beautiful as you are. Your eyes, your smile, your laugh, everything about you is perfect in my eyes. Never change meri Jaan <3.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 28), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Bartho",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/29-2.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8yOS0yLmpwZWciLCJpYXQiOjE3NjUyNDY0MzAsImV4cCI6MTc5Njc4MjQzMH0.60m5HmPMYQYEn8e_3Qj9vtavEkkhKBitCYVce6lc0Mo",
                Description = "November 29th, 2025 - Today Jaani and I celebrated Bartho coming into our family. Bartho is so cute in his little bath towel. Not as cute as my Jaani though... I'm so happy to have in our chotta sa family. Bartho, Mahi B Khan, Jaani and I are the best family ever :). ",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 29), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "The Dholki Night",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/29-1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8yOS0xLmpwZWciLCJpYXQiOjE3NjUyNDY0MjEsImV4cCI6MTc5Njc4MjQyMX0.Bo6WJWc4fGKryODCm_z2TeiAap40Yab2Gw4NxDn70DE",
                Description = "November 29th, 2025 - The moment you wore this outfit, I had flashback of the Instagram post of you on Eid. That post made me blush... and I blushed even harder seeing you on FaceTime wear it. I'm the luckies man in the world :). ",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 29), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Jaani get's her MacBook Pro",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2025/11/30.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMjAyNS8xMS8zMC5qcGVnIiwiaWF0IjoxNzY1MjQ2NDQ1LCJleHAiOjE3OTY3ODI0NDV9.ptweq98D8t62si4IOFQpei-V8nUbVQT0_crzeVPrN7Y",
                Description = "November 30th, 2025 - Jaani got her MacBook Pro today! I'm so proud of you meri Jaan. You've done so much in college. Graduating with a 3.9 with honors and a double degree, while doing research and working at the hospital for 2 years... and all those leadership positions in PakSA and Pre-med Society. I look up to you meri Jaan, you are such a outgoing person.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 30), DateTimeKind.Utc)
            }
        };

        context.Photos.AddRange(photos);
        context.SaveChanges();
        
        Console.WriteLine($"Successfully seeded {photos.Count} photos to the database.");
    }
}

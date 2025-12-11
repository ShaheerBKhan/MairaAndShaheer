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
                Title = "Subse Burrah Bowtie",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgMi5qcGciLCJpYXQiOjE3NjUzNTI2NDAsImV4cCI6MTc5Njg4ODY0MH0.8vbgEKyDmuK_Op_JnqPiNBPoLE0tqnQi0NsQpQDYwd4",
                Description = "Today was date night! We both tried our hand at diamond painting. It was fun but I don't think we are ever finishing these painting... I got this really cute photo of you wearing a big bow tie from Hobby Lobby though 🥹",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 7), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "UMD's Mock Shaadi Event",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMy5qcGciLCJpYXQiOjE3NjUzNTEyNjAsImV4cCI6MTc5Njg4NzI2MH0.WpRRWWw2a-tJDQq6UhGCqogjZ4Vc_cDMdjQJ3Cogetw",
                Description = "Today you dressed up to go to the PakSA event at UMD. You looked stunning 🤩. I wish I could have came with you and we'd dance the night away together 🕺🏼",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 9), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Oversimulated",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%203.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgMy5qcGciLCJpYXQiOjE3NjUzNTI3NDQsImV4cCI6MTc5Njg4ODc0NH0.XIP1SP1z2KPVhg_L5wAVvLlSAobfwn5N7FlxGpmDD_E",
                Description = "Today you were on your period. I felt so bad seeing you in so much pain and also having a tummy ache. I'm sending you so many virtual tummy rubs 🥺. You also said you were oversimulated because of all the clothing and how cold it was outside. Even after all that though, you look so cute ☺️",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 11), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Sushi and Noodle Date Night",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMS5qcGciLCJpYXQiOjE3NjUzNDk4MTQsImV4cCI6MTc5Njg4NTgxNH0.R7r2D5W_o0dev6Ce2eeFZ-ucOptfQ44ltDDfkYFRFFI",
                Description = "Today we had a date night! You went to Phoxotic and I went to Sushi Lover. I ate a little more than you did, 100+ pieces of sushi 🍣.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 15), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Hookie or Bookie",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvMi5qcGciLCJpYXQiOjE3NjUzNTExNjMsImV4cCI6MTc5Njg4NzE2M30.JM6kLvksnhRbM7204KgPkNJOLBqUaiji8MQFuosix5w",
                Description = "Today Bookie (my one) came in today. You were right, it's so comfortable. We finally have matching Bookies 🥰",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 16), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Desi Massage",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%205.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgNS5qcGciLCJpYXQiOjE3NjUzNTE4MTksImV4cCI6MTc5Njg4NzgxOX0.sxA9oHhEIHpfDvCEedoIijF4DXL8GB-BUoaaL_dI2q0",
                Description = "I laughed so hard seeing this screen shot. Ammi Ji put some onion turkari or something in your hair. I learned you really love head scratches 😂",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 20), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Sombrero Queen",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%204.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgNC5qcGciLCJpYXQiOjE3NjUzNTI5MDYsImV4cCI6MTc5Njg4ODkwNn0.hTwZq4Ly_2Jr8LHYi2MuU0p5O1a0vqf4LkgFeABRpis",
                Description = "While you were getting ready you took a small pause and showed me this \"hat.\" Needless to say, it's now my favorite hat on you. You are so silly and make me laugh so much. I love you 😂",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 20), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Sleepy Baby",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%206.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgNi5qcGciLCJpYXQiOjE3NjUzNTE4NDgsImV4cCI6MTc5Njg4Nzg0OH0.sk8fyvKXCj7cErv682Pm2PcgAUHQOLTuluxA3dq_u_0",
                Description = "I love take photos of you first thing in the morning. It's so cute seeing you make a grumy face in the morning. Sometimes I annoy you just to see it 😇",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 21), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "New York City",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/IMG_9144.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvSU1HXzkxNDQuanBnIiwiaWF0IjoxNzY1MzUyNTA0LCJleHAiOjE3OTY4ODg1MDR9.XV3lvIQCLx4vBJcuBBH_1Ew-WC-mVhHOKAaYYpX80fk",
                Description = "My big billi went to New York City today 🌆. The photos of those animals in clothing were so cute. I'm really happy you were able to have some fun and finally catch some much needed sleep on the ride back to Maryland 😴.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 22), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Lego Flower",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%207.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgNy5qcGciLCJpYXQiOjE3NjUzNTE4NjgsImV4cCI6MTc5Njg4Nzg2OH0.AIlItaLGdObz9WWVSYnYKKEM5LgGyc4ZAxDwjglLcNw",
                Description = "Chotti si architect meri. Today you built a lego flower. You built it so fast... it was impressive 👏🏼👏🏼👏🏼.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 24), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Bartho",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%208.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgOC5qcGciLCJpYXQiOjE3NjUzNTMwMjAsImV4cCI6MTc5Njg4OTAyMH0.aTHWeZdQ6RcYOpgLFbK43xybNN0TKMrd3bfhsV9xjTA",
                Description = "Today chotta sa Bartholomew came in. It's only been a couple of hours and we're both attached to him. He is now apart of our chotta, motta family of me, you and Mahi B Khan. One day we'll get a house so we can all be together forever 🏡",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 29), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Dholki Night",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/5.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvNS5KUEciLCJpYXQiOjE3NjUzNTEzOTAsImV4cCI6MTc5Njg4NzM5MH0.hzdxOXOZWlOo3Q6582_qXJ6k9NMrOsBPxbUg2FMZ00Q",
                Description = "Today you went to a dholki. Oh my lord... you looked so good in that blue color. I'm going to have to ban you from leaving the house looking that good 🥵.",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 30), DateTimeKind.Utc)
            },
            new Photo
            {
                Title = "Introducing... MacBook Pro",
                PhotoSourceUrl = "https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/lp_image%209.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvbHBfaW1hZ2UgOS5qcGciLCJpYXQiOjE3NjUzNTMwMzIsImV4cCI6MTc5Njg4OTAzMn0.iFZEiHCorsgW97NtTzBN53w7CB6LXqV2GE_3Pxowy5c",
                Description = "Janni's MacBook Pro finally came in. I'm so happy, you deserve it for all the hard work you've been doing. You are so cautious with it but I give you 3 weeks before you start throwing it around like a TV remote and not caring it has dust on it... I speak from experience 😂",
                Time = DateTime.SpecifyKind(new DateTime(2025, 11, 30), DateTimeKind.Utc)
            }
        };

        context.Photos.AddRange(photos);
        context.SaveChanges();
        
        Console.WriteLine($"Successfully seeded {photos.Count} photos to the database.");
    }
}

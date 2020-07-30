using Microsoft.EntityFrameworkCore;
using System;
using AccountOwnerClient.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

namespace AccountOwnerClient.Data
{
    public class OwnerContext : DbContext
    {
        public OwnerContext(DbContextOptions<OwnerContext> options)
            : base(options)
        {
        }

        public DbSet<Owner> Owner { get; set; }
        public DbSet<Account> Account { get; set; }
    }
}

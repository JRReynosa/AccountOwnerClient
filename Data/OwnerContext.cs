using Microsoft.EntityFrameworkCore;
using System;
using AccountOwnerClient.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountOwnerClient.Data
{
    public class OwnerContext : DbContext
    {
        public OwnerContext(DbContextOptions<OwnerContext> options)
            : base(options)
        {
        }

        public DbSet<Owner> Owner { get; set; }
    }
}

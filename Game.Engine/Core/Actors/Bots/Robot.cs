﻿namespace Game.Engine.Core.Actors.Bots
{
    using System;
    using System.Linq;
    using System.Numerics;

    public class Robot : Player
    {
        private float Wander = 0;

        public override int ShootCooldownTime { get => world.Hook.ShootCooldownTimeBot; }
        public override float MaxHealth { get => world.Hook.MaxHealthBot; }
        public override int BaseThrust { get => world.Hook.BaseThrustBot; }

        public Robot() : base()
        {
        }

        public override void Step()
        {
            if (Deinitialized) return;

            if (!IsAlive)
                this.Spawn();

            base.ShootRequested = true;


            foreach (var player in
                world.Players.OrderByDescending(p => p.Score)
                    .Where(p => !p.Name?.StartsWith("Daud") ?? true)
                    .Where(p => p.IsAlive)
                    )
            {

                if (world.FrameNumber % 10 == 0)
                    Wander = (float)(new Random().Next(-1, 1) * Math.PI/15);

                var delta = Vector2.Subtract(player.GameObject.Position, this.GameObject.Position);
                Angle = (float)Math.Atan2(delta.Y, delta.X) + Wander;
                break;
            }

            base.Step();
        }

        public override void PostStep()
        {
        }
    }
}
// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace Game.Engine.Networking.FlatBuffers
{

using global::System;
using global::Google.FlatBuffers;

public struct NetSpawn : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static NetSpawn GetRootAsNetSpawn(ByteBuffer _bb) { return GetRootAsNetSpawn(_bb, new NetSpawn()); }
  public static NetSpawn GetRootAsNetSpawn(ByteBuffer _bb, NetSpawn obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p.bb_pos = _i; __p.bb = _bb; }
  public NetSpawn __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public string Name { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
  public ArraySegment<byte>? GetNameBytes() { return __p.__vector_as_arraysegment(4); }
  public string Ship { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
  public ArraySegment<byte>? GetShipBytes() { return __p.__vector_as_arraysegment(6); }
  public string Color { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
  public ArraySegment<byte>? GetColorBytes() { return __p.__vector_as_arraysegment(8); }

  public static Offset<NetSpawn> CreateNetSpawn(FlatBufferBuilder builder,
      StringOffset nameOffset = default(StringOffset),
      StringOffset shipOffset = default(StringOffset),
      StringOffset colorOffset = default(StringOffset)) {
    builder.StartObject(3);
    NetSpawn.AddColor(builder, colorOffset);
    NetSpawn.AddShip(builder, shipOffset);
    NetSpawn.AddName(builder, nameOffset);
    return NetSpawn.EndNetSpawn(builder);
  }

  public static void StartNetSpawn(FlatBufferBuilder builder) { builder.StartObject(3); }
  public static void AddName(FlatBufferBuilder builder, StringOffset nameOffset) { builder.AddOffset(0, nameOffset.Value, 0); }
  public static void AddShip(FlatBufferBuilder builder, StringOffset shipOffset) { builder.AddOffset(1, shipOffset.Value, 0); }
  public static void AddColor(FlatBufferBuilder builder, StringOffset colorOffset) { builder.AddOffset(2, colorOffset.Value, 0); }
  public static Offset<NetSpawn> EndNetSpawn(FlatBufferBuilder builder) {
    int o = builder.EndObject();
    return new Offset<NetSpawn>(o);
  }
};


}
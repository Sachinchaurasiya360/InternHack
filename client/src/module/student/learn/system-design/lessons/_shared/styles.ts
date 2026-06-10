
i
m
p
o
r
t
 
t
y
p
e
 
{
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
V
a
r
i
a
n
t
s
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;




e
x
p
o
r
t
 
c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


e
x
p
o
r
t
 
c
o
n
s
t
 
S
D
_
S
O
F
T
 
=
 
"
r
g
b
a
(
1
3
2
,
2
0
4
,
2
2
,
0
.
1
0
)
"
;


e
x
p
o
r
t
 
c
o
n
s
t
 
S
D
_
B
O
R
D
E
R
 
=
 
"
r
g
b
a
(
1
3
2
,
2
0
4
,
2
2
,
0
.
3
5
)
"
;




e
x
p
o
r
t
 
c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




e
x
p
o
r
t
 
c
o
n
s
t
 
s
e
c
t
i
o
n
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
s
e
c
t
i
o
n
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
:
 
V
a
r
i
a
n
t
s
 
=
 
{


 
 
h
i
d
d
e
n
:
 
{
}
,


 
 
s
h
o
w
:
 
{


 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
,
 
d
e
l
a
y
C
h
i
l
d
r
e
n
:
 
0
.
0
4
 
}
,


 
 
}
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
c
a
r
d
E
n
t
r
a
n
c
e
:
 
V
a
r
i
a
n
t
s
 
=
 
{


 
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
2
,
 
s
c
a
l
e
:
 
0
.
9
8
 
}
,


 
 
s
h
o
w
:
 
{


 
 
 
 
o
p
a
c
i
t
y
:
 
1
,


 
 
 
 
y
:
 
0
,


 
 
 
 
s
c
a
l
e
:
 
1
,


 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
8
0
,
 
d
a
m
p
i
n
g
:
 
2
6
 
}
,


 
 
}
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
f
a
d
e
U
p
:
 
V
a
r
i
a
n
t
s
 
=
 
{


 
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
,


 
 
s
h
o
w
:
 
{


 
 
 
 
o
p
a
c
i
t
y
:
 
1
,


 
 
 
 
y
:
 
0
,


 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
2
0
,
 
d
a
m
p
i
n
g
:
 
2
8
 
}
,


 
 
}
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
c
a
r
d
H
o
v
e
r
 
=
 
{


 
 
y
:
 
-
3
,


 
 
t
r
a
n
s
i
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
 
a
s
 
c
o
n
s
t
,
 
s
t
i
f
f
n
e
s
s
:
 
3
2
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
}
,


}
;



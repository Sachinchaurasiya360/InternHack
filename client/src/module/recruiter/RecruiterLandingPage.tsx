
i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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


i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
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
 
N
u
m
b
e
r
F
l
o
w
 
f
r
o
m
 
"
@
n
u
m
b
e
r
-
f
l
o
w
/
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
 
{


 
 
A
r
r
o
w
R
i
g
h
t
,


 
 
B
r
i
e
f
c
a
s
e
,


 
 
B
a
r
C
h
a
r
t
3
,


 
 
U
s
e
r
s
,


 
 
B
u
i
l
d
i
n
g
2
,


 
 
C
a
l
e
n
d
a
r
C
h
e
c
k
,


 
 
C
a
l
e
n
d
a
r
D
a
y
s
,


 
 
U
s
e
r
C
o
g
,


 
 
W
a
l
l
e
t
,


 
 
T
r
e
n
d
i
n
g
U
p
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


 
 
P
l
a
y
,


 
 
C
h
e
c
k
,


 
 
X
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
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
 
{
 
L
i
n
k
 
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
F
o
o
t
e
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
K
i
c
k
e
r
"
;




c
o
n
s
t
 
R
O
T
A
T
I
N
G
_
W
O
R
D
S
 
=
 
[
"
h
i
r
e
.
"
,
 
"
o
n
b
o
a
r
d
.
"
,
 
"
p
a
y
.
"
,
 
"
r
e
v
i
e
w
.
"
,
 
"
r
e
t
a
i
n
.
"
]
;




c
o
n
s
t
 
F
E
A
T
U
R
E
S
:
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
:
 
s
t
r
i
n
g
;


 
 
i
c
o
n
:
 
t
y
p
e
o
f
 
B
r
i
e
f
c
a
s
e
;


 
 
s
t
a
t
:
 
s
t
r
i
n
g
;


 
 
s
p
a
n
?
:
 
"
s
i
n
g
l
e
"
 
|
 
"
d
o
u
b
l
e
"
 
|
 
"
f
u
l
l
"
;


}
[
]
 
=
 
[


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
H
i
r
i
n
g
 
p
i
p
e
l
i
n
e
s
"
,


 
 
 
 
d
e
s
c
:
 
"
P
o
s
t
 
j
o
b
s
,
 
d
e
s
i
g
n
 
m
u
l
t
i
-
r
o
u
n
d
 
s
t
a
g
e
s
,
 
m
o
v
e
 
c
a
n
d
i
d
a
t
e
s
 
f
r
o
m
 
s
c
r
e
e
n
i
n
g
 
t
o
 
o
f
f
e
r
 
w
i
t
h
o
u
t
 
l
e
a
v
i
n
g
 
t
h
e
 
t
a
b
.
"
,


 
 
 
 
i
c
o
n
:
 
B
r
i
e
f
c
a
s
e
,


 
 
 
 
s
t
a
t
:
 
"
5
0
0
+
 
j
o
b
s
 
p
o
s
t
e
d
"
,


 
 
 
 
s
p
a
n
:
 
"
d
o
u
b
l
e
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
I
n
t
e
r
v
i
e
w
 
s
c
h
e
d
u
l
i
n
g
"
,


 
 
 
 
d
e
s
c
:
 
"
C
a
l
e
n
d
a
r
 
v
i
e
w
s
,
 
s
t
r
u
c
t
u
r
e
d
 
p
a
n
e
l
 
f
e
e
d
b
a
c
k
,
 
p
e
r
-
c
a
n
d
i
d
a
t
e
 
c
o
n
v
e
r
s
a
t
i
o
n
 
h
i
s
t
o
r
y
.
"
,


 
 
 
 
i
c
o
n
:
 
C
a
l
e
n
d
a
r
C
h
e
c
k
,


 
 
 
 
s
t
a
t
:
 
"
p
a
n
e
l
 
f
e
e
d
b
a
c
k
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
E
m
p
l
o
y
e
e
 
l
i
f
e
c
y
c
l
e
"
,


 
 
 
 
d
e
s
c
:
 
"
O
n
b
o
a
r
d
i
n
g
 
c
h
e
c
k
l
i
s
t
s
,
 
r
o
l
e
 
c
h
a
n
g
e
s
,
 
o
f
f
b
o
a
r
d
i
n
g
,
 
f
u
l
l
 
t
i
m
e
l
i
n
e
 
p
e
r
 
e
m
p
l
o
y
e
e
.
"
,


 
 
 
 
i
c
o
n
:
 
U
s
e
r
C
o
g
,


 
 
 
 
s
t
a
t
:
 
"
e
n
d
-
t
o
-
e
n
d
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
L
e
a
v
e
 
a
n
d
 
a
t
t
e
n
d
a
n
c
e
"
,


 
 
 
 
d
e
s
c
:
 
"
P
o
l
i
c
i
e
s
,
 
b
a
l
a
n
c
e
s
,
 
h
o
l
i
d
a
y
 
c
a
l
e
n
d
a
r
s
,
 
c
h
e
c
k
-
i
n
 
t
r
a
c
k
i
n
g
 
w
i
t
h
 
o
v
e
r
t
i
m
e
 
a
n
d
 
r
e
g
u
l
a
r
i
z
a
t
i
o
n
.
"
,


 
 
 
 
i
c
o
n
:
 
C
a
l
e
n
d
a
r
D
a
y
s
,


 
 
 
 
s
t
a
t
:
 
"
c
o
n
f
i
g
u
r
a
b
l
e
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
P
a
y
r
o
l
l
 
a
n
d
 
r
e
i
m
b
u
r
s
e
m
e
n
t
s
"
,


 
 
 
 
d
e
s
c
:
 
"
R
u
n
 
p
a
y
r
o
l
l
,
 
p
r
o
c
e
s
s
 
c
o
n
t
r
a
c
t
o
r
s
,
 
s
u
b
m
i
t
-
a
p
p
r
o
v
e
-
p
a
y
 
f
l
o
w
s
,
 
g
e
n
e
r
a
t
e
 
p
a
y
s
l
i
p
s
.
"
,


 
 
 
 
i
c
o
n
:
 
W
a
l
l
e
t
,


 
 
 
 
s
t
a
t
:
 
"
a
u
t
o
 
p
a
y
s
l
i
p
s
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
P
e
r
f
o
r
m
a
n
c
e
 
r
e
v
i
e
w
s
"
,


 
 
 
 
d
e
s
c
:
 
"
C
y
c
l
e
s
 
f
r
o
m
 
d
r
a
f
t
 
t
o
 
c
o
m
p
l
e
t
i
o
n
,
 
m
e
a
s
u
r
a
b
l
e
 
g
o
a
l
s
,
 
s
e
l
f
 
a
n
d
 
m
a
n
a
g
e
r
 
a
s
s
e
s
s
m
e
n
t
s
.
"
,


 
 
 
 
i
c
o
n
:
 
T
r
e
n
d
i
n
g
U
p
,


 
 
 
 
s
t
a
t
:
 
"
r
e
v
i
e
w
 
c
y
c
l
e
s
"
,


 
 
 
 
s
p
a
n
:
 
"
d
o
u
b
l
e
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
C
o
m
p
l
i
a
n
c
e
 
a
n
d
 
w
o
r
k
f
l
o
w
s
"
,


 
 
 
 
d
e
s
c
:
 
"
D
o
c
u
m
e
n
t
 
a
c
k
n
o
w
l
e
d
g
e
m
e
n
t
,
 
e
x
p
i
r
y
 
a
l
e
r
t
s
,
 
c
o
n
f
i
g
u
r
a
b
l
e
 
a
p
p
r
o
v
a
l
 
c
h
a
i
n
s
 
f
o
r
 
a
n
y
 
H
R
 
p
r
o
c
e
s
s
.
"
,


 
 
 
 
i
c
o
n
:
 
S
h
i
e
l
d
C
h
e
c
k
,


 
 
 
 
s
t
a
t
:
 
"
a
u
d
i
t
 
t
r
a
i
l
"
,


 
 
}
,


 
 
{


 
 
 
 
t
i
t
l
e
:
 
"
H
R
 
a
n
a
l
y
t
i
c
s
"
,


 
 
 
 
d
e
s
c
:
 
"
R
e
a
l
-
t
i
m
e
 
h
e
a
d
c
o
u
n
t
,
 
a
t
t
r
i
t
i
o
n
,
 
l
e
a
v
e
 
p
a
t
t
e
r
n
s
,
 
a
t
t
e
n
d
a
n
c
e
 
t
r
e
n
d
s
,
 
p
a
y
r
o
l
l
 
s
u
m
m
a
r
i
e
s
.
"
,


 
 
 
 
i
c
o
n
:
 
B
a
r
C
h
a
r
t
3
,


 
 
 
 
s
t
a
t
:
 
"
l
i
v
e
 
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
s
p
a
n
:
 
"
f
u
l
l
"
,


 
 
}
,


]
;




c
o
n
s
t
 
A
U
D
I
E
N
C
E
S
 
=
 
[


 
 
{


 
 
 
 
n
u
m
:
 
"
0
1
"
,


 
 
 
 
t
i
t
l
e
:
 
"
C
a
m
p
u
s
 
r
e
c
r
u
i
t
e
r
s
"
,


 
 
 
 
d
e
s
c
:
 
"
R
u
n
n
i
n
g
 
p
l
a
c
e
m
e
n
t
 
s
e
a
s
o
n
 
a
t
 
a
n
 
I
I
T
,
 
N
I
T
 
o
r
 
t
i
e
r
-
2
 
c
a
m
p
u
s
.
 
S
h
o
r
t
l
i
s
t
 
5
0
0
 
r
e
s
u
m
e
s
 
b
y
 
b
r
e
a
k
f
a
s
t
,
 
s
l
o
t
 
i
n
t
e
r
v
i
e
w
s
 
b
e
f
o
r
e
 
l
u
n
c
h
.
"
,


 
 
 
 
b
u
l
l
e
t
s
:
 
[


 
 
 
 
 
 
"
B
u
l
k
 
c
a
m
p
u
s
 
d
r
i
v
e
s
"
,


 
 
 
 
 
 
"
S
h
a
r
e
d
 
r
e
c
r
u
i
t
e
r
 
l
o
g
i
n
s
"
,


 
 
 
 
 
 
"
R
e
s
u
m
e
 
A
T
S
 
p
r
e
-
f
i
l
t
e
r
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
n
u
m
:
 
"
0
2
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
t
a
r
t
u
p
 
f
o
u
n
d
e
r
s
"
,


 
 
 
 
d
e
s
c
:
 
"
F
i
r
s
t
 
t
e
n
 
h
i
r
e
s
.
 
Y
o
u
 
d
o
 
n
o
t
 
n
e
e
d
 
a
n
 
A
T
S
 
w
i
t
h
 
2
0
0
 
s
e
a
t
s
,
 
y
o
u
 
n
e
e
d
 
a
 
s
i
n
g
l
e
 
t
o
o
l
 
t
h
a
t
 
g
e
t
s
 
a
 
s
h
o
r
t
l
i
s
t
 
t
o
 
y
o
u
 
b
y
 
6
 
p
m
.
"
,


 
 
 
 
b
u
l
l
e
t
s
:
 
[


 
 
 
 
 
 
"
F
a
s
t
 
j
o
b
 
p
o
s
t
i
n
g
"
,


 
 
 
 
 
 
"
C
a
n
d
i
d
a
t
e
 
s
c
o
r
i
n
g
"
,


 
 
 
 
 
 
"
O
f
f
e
r
 
a
n
d
 
o
n
b
o
a
r
d
i
n
g
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
n
u
m
:
 
"
0
3
"
,


 
 
 
 
t
i
t
l
e
:
 
"
H
R
 
t
e
a
m
s
"
,


 
 
 
 
d
e
s
c
:
 
"
R
u
n
n
i
n
g
 
t
h
e
 
w
h
o
l
e
 
e
m
p
l
o
y
e
e
 
s
t
a
c
k
,
 
n
o
t
 
j
u
s
t
 
h
i
r
i
n
g
.
 
P
a
y
r
o
l
l
,
 
l
e
a
v
e
,
 
r
e
v
i
e
w
s
,
 
c
o
m
p
l
i
a
n
c
e
,
 
w
i
t
h
o
u
t
 
t
e
n
 
s
e
p
a
r
a
t
e
 
S
a
a
S
 
l
o
g
i
n
s
.
"
,


 
 
 
 
b
u
l
l
e
t
s
:
 
[


 
 
 
 
 
 
"
F
u
l
l
 
H
R
M
S
 
s
t
a
c
k
"
,


 
 
 
 
 
 
"
A
p
p
r
o
v
a
l
 
w
o
r
k
f
l
o
w
s
"
,


 
 
 
 
 
 
"
C
o
m
p
l
i
a
n
c
e
 
d
o
c
u
m
e
n
t
 
v
a
u
l
t
"
,


 
 
 
 
]
,


 
 
}
,


]
;




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
n
u
m
:
 
"
0
1
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
e
t
 
u
p
 
y
o
u
r
 
o
r
g
"
,


 
 
 
 
d
e
s
c
:
 
"
C
o
m
p
a
n
y
 
p
r
o
f
i
l
e
,
 
d
e
p
a
r
t
m
e
n
t
s
,
 
r
o
l
e
s
,
 
p
e
r
m
i
s
s
i
o
n
s
.
 
1
0
 
m
i
n
u
t
e
s
.
"
,


 
 
 
 
t
i
m
e
:
 
"
~
1
0
 
m
i
n
"
,


 
 
}
,


 
 
{


 
 
 
 
n
u
m
:
 
"
0
2
"
,


 
 
 
 
t
i
t
l
e
:
 
"
P
o
s
t
 
a
 
r
o
l
e
"
,


 
 
 
 
d
e
s
c
:
 
"
J
D
,
 
p
i
p
e
l
i
n
e
 
s
t
a
g
e
s
,
 
p
a
n
e
l
i
s
t
s
.
 
L
i
v
e
 
i
n
 
3
 
c
l
i
c
k
s
.
"
,


 
 
 
 
t
i
m
e
:
 
"
~
3
 
m
i
n
"
,


 
 
}
,


 
 
{


 
 
 
 
n
u
m
:
 
"
0
3
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
h
o
r
t
l
i
s
t
 
a
n
d
 
i
n
t
e
r
v
i
e
w
"
,


 
 
 
 
d
e
s
c
:
 
"
A
T
S
-
s
c
o
r
e
d
 
a
p
p
l
i
c
a
t
i
o
n
s
,
 
s
t
r
u
c
t
u
r
e
d
 
i
n
t
e
r
v
i
e
w
 
f
e
e
d
b
a
c
k
 
p
e
r
 
r
o
u
n
d
.
"
,


 
 
 
 
t
i
m
e
:
 
"
o
n
g
o
i
n
g
"
,


 
 
}
,


 
 
{


 
 
 
 
n
u
m
:
 
"
0
4
"
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
b
o
a
r
d
 
a
n
d
 
r
u
n
 
H
R
"
,


 
 
 
 
d
e
s
c
:
 
"
O
n
b
o
a
r
d
i
n
g
 
c
h
e
c
k
l
i
s
t
,
 
l
e
a
v
e
 
p
o
l
i
c
y
,
 
p
a
y
r
o
l
l
,
 
r
e
i
m
b
u
r
s
e
m
e
n
t
s
,
 
r
e
v
i
e
w
s
.
"
,


 
 
 
 
t
i
m
e
:
 
"
o
n
g
o
i
n
g
"
,


 
 
}
,


]
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
R
e
c
r
u
i
t
e
r
L
a
n
d
i
n
g
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
w
o
r
d
I
d
x
,
 
s
e
t
W
o
r
d
I
d
x
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(


 
 
 
 
 
 
(
)
 
=
>
 
s
e
t
W
o
r
d
I
d
x
(
(
i
)
 
=
>
 
(
i
 
+
 
1
)
 
%
 
R
O
T
A
T
I
N
G
_
W
O
R
D
S
.
l
e
n
g
t
h
)
,


 
 
 
 
 
 
2
2
0
0
,


 
 
 
 
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
i
d
)
;


 
 
}
,
 
[
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
a
n
s
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
H
i
r
e
 
f
r
o
m
 
I
I
T
s
,
 
N
I
T
s
 
&
 
T
o
p
 
C
o
l
l
e
g
e
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
P
o
s
t
 
i
n
t
e
r
n
s
h
i
p
s
 
a
n
d
 
j
o
b
s
 
t
o
 
2
0
0
,
0
0
0
+
 
v
e
r
i
f
i
e
d
 
s
t
u
d
e
n
t
s
.
 
A
T
S
-
s
c
o
r
e
d
 
p
i
p
e
l
i
n
e
s
,
 
i
n
t
e
r
v
i
e
w
 
s
c
h
e
d
u
l
i
n
g
,
 
p
a
y
r
o
l
l
,
 
a
n
d
 
H
R
 
w
o
r
k
f
l
o
w
s
 
i
n
 
o
n
e
 
p
l
a
t
f
o
r
m
.
 
F
r
e
e
 
f
o
r
 
t
h
e
 
f
i
r
s
t
 
t
w
o
 
s
e
a
t
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
H
R
 
p
l
a
t
f
o
r
m
,
 
r
e
c
r
u
i
t
e
r
 
d
a
s
h
b
o
a
r
d
,
 
p
o
s
t
 
j
o
b
s
,
 
h
i
r
e
 
s
t
u
d
e
n
t
s
,
 
e
m
p
l
o
y
e
e
 
m
a
n
a
g
e
m
e
n
t
,
 
p
a
y
r
o
l
l
,
 
a
t
t
e
n
d
a
n
c
e
,
 
p
e
r
f
o
r
m
a
n
c
e
 
r
e
v
i
e
w
s
,
 
H
R
 
a
n
a
l
y
t
i
c
s
,
 
h
i
r
i
n
g
 
p
i
p
e
l
i
n
e
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
f
o
r
-
r
e
c
r
u
i
t
e
r
s
"
)
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
w
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
d
a
r
k
:
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
2
3
,
2
3
,
2
3
,
0
.
0
4
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
1
4
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
h
i
d
d
e
n
 
d
a
r
k
:
b
l
o
c
k
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
2
5
5
,
2
5
5
,
2
5
5
,
0
.
0
4
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
1
4
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
z
-
1
0
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
t
-
3
2
 
p
b
-
1
0
 
m
d
:
p
t
-
4
0
 
m
d
:
p
b
-
1
4
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
[
0
.
4
,
 
1
,
 
0
.
4
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
r
e
c
r
u
i
t
e
r
s
,
 
f
o
u
n
d
e
r
s
 
a
n
d
 
h
r
 
t
e
a
m
s


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
h
1


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
d
e
l
a
y
:
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
8
 
t
e
x
t
-
5
x
l
 
s
m
:
t
e
x
t
-
6
x
l
 
m
d
:
t
e
x
t
-
7
x
l
 
l
g
:
t
e
x
t
-
8
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
l
e
a
d
i
n
g
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
O
n
e
 
s
t
a
c
k
 
t
o


 
 
 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
 
a
l
i
g
n
-
b
a
s
e
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
R
O
T
A
T
I
N
G
_
W
O
R
D
S
[
w
o
r
d
I
d
x
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
y
:
 
4
0
,
 
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
 
f
i
l
t
e
r
:
 
"
b
l
u
r
(
8
p
x
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
y
:
 
0
,
 
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
 
f
i
l
t
e
r
:
 
"
b
l
u
r
(
0
p
x
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
y
:
 
-
4
0
,
 
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
 
f
i
l
t
e
r
:
 
"
b
l
u
r
(
8
p
x
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
z
-
1
0
 
i
n
l
i
n
e
-
b
l
o
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
R
O
T
A
T
I
N
G
_
W
O
R
D
S
[
w
o
r
d
I
d
x
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
X
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
X
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
7
,
 
d
e
l
a
y
:
 
0
.
9
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
b
g
-
l
i
m
e
-
4
0
0
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
h
1
>




 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
p


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
8
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
2
x
l
 
m
x
-
a
u
t
o
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
r
o
l
e
s
,
 
s
c
r
e
e
n
 
r
e
s
u
m
e
s
,
 
s
c
h
e
d
u
l
e
 
p
a
n
e
l
s
,
 
r
u
n
 
p
a
y
r
o
l
l
,
 
s
h
i
p


 
 
 
 
 
 
 
 
 
 
 
 
p
e
r
f
o
r
m
a
n
c
e
 
r
e
v
i
e
w
s
.
 
O
n
e
 
w
o
r
k
s
p
a
c
e
,
 
n
o
t
 
f
o
u
r
t
e
e
n
 
S
a
a
S
 
t
a
b
s
.


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
p
>




 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
0
.
2
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
0
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
s
m
:
f
l
e
x
-
r
o
w
 
g
a
p
-
3
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
i
t
e
m
s
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
r
e
c
r
u
i
t
e
r
/
r
e
g
i
s
t
e
r
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
h
i
r
i
n
g
 
f
r
e
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
#
h
o
w
-
i
t
-
w
o
r
k
s
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
1
0
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
5
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
f
i
l
l
-
c
u
r
r
e
n
t
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
e
 
h
o
w
 
i
t
 
w
o
r
k
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
H
e
r
o
S
t
a
t
s
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
y
-
2
4
 
m
d
:
p
y
-
3
2
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
b
-
1
6
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"
>
w
h
o
 
i
t
 
i
s
 
f
o
r
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
r
e
e
 
h
i
r
i
n
g
 
s
h
a
p
e
s
,
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
e
 
s
t
a
c
k
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
x
l
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
r
o
m
 
a
 
s
i
n
g
l
e
 
f
o
u
n
d
e
r
 
m
a
k
i
n
g
 
t
h
e
 
f
i
r
s
t
 
f
i
v
e
 
h
i
r
e
s
 
t
o
 
a
 
c
a
m
p
u
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
a
m
 
r
u
n
n
i
n
g
 
t
h
r
e
e
 
w
e
e
k
s
 
o
f
 
p
l
a
c
e
m
e
n
t
 
d
r
i
v
e
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
m
d
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
p
x
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
2
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
A
U
D
I
E
N
C
E
S
.
m
a
p
(
(
a
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
p
-
8
 
m
d
:
p
-
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
9
0
0
 
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
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
m
d
:
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
4
 
t
e
x
t
-
s
m
 
m
d
:
t
e
x
t
-
b
a
s
e
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
8
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
b
u
l
l
e
t
s
.
m
a
p
(
(
b
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
b
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
h
-
1
 
w
-
1
 
s
h
r
i
n
k
-
0
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
b
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
y
-
2
4
 
m
d
:
p
y
-
3
2
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
b
-
1
6
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"
>
t
h
e
 
h
r
 
s
t
a
c
k
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
i
g
h
t
 
m
o
d
u
l
e
s
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
n
e
 
w
o
r
k
s
p
a
c
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
x
l
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
t
h
i
n
g
 
b
e
t
w
e
e
n
 
t
h
e
 
f
i
r
s
t
 
j
o
b
 
p
o
s
t
 
a
n
d
 
t
h
e
 
a
n
n
u
a
l
 
r
e
v
i
e
w
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
t
h
i
n
g
 
b
o
l
t
e
d
 
o
n
 
a
s
 
a
 
p
l
u
g
i
n
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
p
x
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
2
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
F
E
A
T
U
R
E
S
.
m
a
p
(
(
f
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
f
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
,
 
m
a
r
g
i
n
:
 
"
-
6
0
p
x
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
f
.
s
p
a
n
 
=
=
=
 
"
f
u
l
l
"
 
?
 
"
m
d
:
c
o
l
-
s
p
a
n
-
3
"
 
:
 
f
.
s
p
a
n
 
=
=
=
 
"
d
o
u
b
l
e
"
 
?
 
"
m
d
:
c
o
l
-
s
p
a
n
-
2
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
h
-
f
u
l
l
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
p
-
8
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
9
0
0
 
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
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
h
-
1
0
 
w
-
1
0
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
l
i
m
e
-
4
0
0
/
1
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
/
3
0
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
f
.
i
c
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
.
5
 
h
-
4
.
5
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
s
t
a
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
 
m
d
:
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
i
d
=
"
h
o
w
-
i
t
-
w
o
r
k
s
"


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
y
-
2
4
 
m
d
:
p
y
-
3
2
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
s
c
r
o
l
l
-
m
t
-
2
0
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
b
-
1
6
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"
>
h
o
w
 
i
t
 
w
o
r
k
s
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
o
u
r
 
s
t
e
p
s
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
i
r
s
t
 
h
i
r
e
 
t
h
i
s
 
w
e
e
k
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
m
d
:
g
r
i
d
-
c
o
l
s
-
4
 
g
a
p
-
p
x
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
2
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
p
-
8
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
 
/
 
{
s
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
i
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
m
d
:
t
e
x
t
-
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
y
-
2
4
 
m
d
:
p
y
-
3
2
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
 
m
b
-
1
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"
>
p
r
i
c
i
n
g
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
r
e
e
 
t
o
 
s
t
a
r
t
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
a
i
d
 
w
h
e
n
 
y
o
u
 
s
c
a
l
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
p
a
i
d
 
p
l
a
n
 
s
h
i
p
s
 
w
i
t
h
 
a
 
7
-
d
a
y
 
f
r
e
e
 
t
r
i
a
l
.
 
N
o
 
c
a
r
d
 
n
e
e
d
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
 
a
u
t
o
-
r
e
n
e
w
a
l
 
s
u
r
p
r
i
s
e
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
m
d
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
5
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
m
b
-
2
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
P
L
A
N
S
.
m
a
p
(
(
p
l
a
n
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
l
a
n
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
e
l
a
t
i
v
e
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
-
2
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
/
5
0
 
s
h
a
d
o
w
-
2
x
l
 
s
h
a
d
o
w
-
l
i
m
e
-
4
0
0
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
f
l
e
x
 
f
l
e
x
-
c
o
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
r
e
l
a
t
i
v
e
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
2
x
l
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
i
m
e
-
4
0
0
/
1
0
 
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
1
 
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
-
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
t
o
p
-
1
/
2
 
i
n
s
e
t
-
x
-
0
 
m
x
-
a
u
t
o
 
h
-
1
2
 
w
-
f
u
l
l
 
b
g
-
l
i
m
e
-
4
0
0
/
4
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
l
u
r
-
3
x
l
 
-
z
-
1
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
 
l
e
f
t
-
6
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
1
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
f
o
n
t
-
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
s
t
o
n
e
-
9
5
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
s
t
 
p
o
p
u
l
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
6
 
m
i
n
-
h
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
t
a
g
l
i
n
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
b
a
s
e
l
i
n
e
 
g
a
p
-
1
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
₹


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
₹


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
"
e
n
-
I
N
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
t
r
i
a
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
t
r
i
a
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
e
d
 
f
o
r
e
v
e
r
,
 
n
o
 
c
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
8
 
p
t
-
6
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
c
l
u
d
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
f
e
a
t
u
r
e
s
.
m
a
p
(
(
f
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
f
.
t
e
x
t
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
i
n
c
l
u
d
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
4
 
h
-
4
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
w
-
4
 
h
-
4
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
/
2
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
.
i
n
c
l
u
d
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
l
i
n
e
-
t
h
r
o
u
g
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
t
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
8
 
p
b
-
8
 
m
t
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
p
l
a
n
.
c
t
a
.
h
r
e
f
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
g
r
o
u
p
 
w
-
f
u
l
l
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
g
r
o
u
p
 
w
-
f
u
l
l
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
c
t
a
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
=
{
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
9
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
6
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
r
a
d
i
a
l
-
g
r
a
d
i
e
n
t
(
c
i
r
c
l
e
 
a
t
 
1
p
x
 
1
p
x
,
 
w
h
i
t
e
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
0
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
2
8
p
x
 
2
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
g
r
i
d
 
m
d
:
g
r
i
d
-
c
o
l
s
-
5
 
g
a
p
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
d
:
c
o
l
-
s
p
a
n
-
3
 
p
-
1
0
 
m
d
:
p
-
1
6
 
b
o
r
d
e
r
-
b
 
m
d
:
b
o
r
d
e
r
-
b
-
0
 
m
d
:
b
o
r
d
e
r
-
r
 
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
[
0
.
4
,
 
1
,
 
0
.
4
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
e
e
 
t
o
 
s
t
a
r
t
 
/
 
n
o
 
c
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
w
h
i
t
e
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
n
e
x
t
 
h
i
r
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
s
 
w
i
t
h
 
o
n
e
 
p
o
s
t
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
l
g
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
t
 
u
p
 
y
o
u
r
 
o
r
g
,
 
p
o
s
t
 
a
 
r
o
l
e
,
 
g
e
t
 
A
T
S
-
s
c
o
r
e
d
 
s
h
o
r
t
l
i
s
t
s
 
b
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
r
n
i
n
g
.
 
F
r
e
e
 
f
o
r
e
v
e
r
 
f
o
r
 
t
h
e
 
f
i
r
s
t
 
t
w
o
 
s
e
a
t
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
0
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
s
m
:
f
l
e
x
-
r
o
w
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
r
e
c
r
u
i
t
e
r
/
r
e
g
i
s
t
e
r
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
h
i
r
i
n
g
 
f
r
e
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
j
o
b
s
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
w
h
i
t
e
/
2
0
 
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
t
a
l
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
d
:
c
o
l
-
s
p
a
n
-
2
 
p
-
1
0
 
m
d
:
p
-
1
6
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
m
d
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5
0
0
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
+
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
s
 
p
o
s
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
m
d
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1
4
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
/
<
/
s
p
a
n
>
1
4


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
 
m
o
d
u
l
e
s
 
s
h
i
p
p
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
m
d
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4
0
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
%
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
a
s
t
e
r
 
t
i
m
e
-
t
o
-
h
i
r
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
H
e
r
o
S
t
a
t
s
(
)
 
{


 
 
c
o
n
s
t
 
[
v
a
l
u
e
s
,
 
s
e
t
V
a
l
u
e
s
]
 
=
 
u
s
e
S
t
a
t
e
(
{
 
p
o
s
t
s
:
 
0
,
 
h
i
r
e
s
:
 
0
,
 
m
o
d
u
l
e
s
:
 
0
 
}
)
;


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(


 
 
 
 
 
 
(
)
 
=
>
 
s
e
t
V
a
l
u
e
s
(
{
 
p
o
s
t
s
:
 
5
1
2
,
 
h
i
r
e
s
:
 
2
3
4
0
,
 
m
o
d
u
l
e
s
:
 
1
4
 
}
)
,


 
 
 
 
 
 
7
0
0
,


 
 
 
 
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
)
;


 
 
}
,
 
[
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
6
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
 
}
}


 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
d
e
l
a
y
:
 
0
.
5
 
}
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
6
 
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
p
x
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
"


 
 
 
 
>


 
 
 
 
 
 
<
C
e
l
l
 
i
c
o
n
=
{
B
r
i
e
f
c
a
s
e
}
 
v
a
l
u
e
=
{
v
a
l
u
e
s
.
p
o
s
t
s
}
 
l
a
b
e
l
=
"
r
o
l
e
s
 
p
o
s
t
e
d
"
 
s
u
f
f
i
x
=
"
+
"
 
/
>


 
 
 
 
 
 
<
C
e
l
l
 
i
c
o
n
=
{
U
s
e
r
s
}
 
v
a
l
u
e
=
{
v
a
l
u
e
s
.
h
i
r
e
s
}
 
l
a
b
e
l
=
"
h
i
r
e
s
 
s
h
i
p
p
e
d
"
 
s
u
f
f
i
x
=
"
+
"
 
/
>


 
 
 
 
 
 
<
C
e
l
l
 
i
c
o
n
=
{
B
u
i
l
d
i
n
g
2
}
 
v
a
l
u
e
=
{
v
a
l
u
e
s
.
m
o
d
u
l
e
s
}
 
l
a
b
e
l
=
"
h
r
 
m
o
d
u
l
e
s
"
 
/
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
C
e
l
l
(
{


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
v
a
l
u
e
,


 
 
l
a
b
e
l
,


 
 
s
u
f
f
i
x
,


}
:
 
{


 
 
i
c
o
n
:
 
t
y
p
e
o
f
 
B
r
i
e
f
c
a
s
e
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
s
u
f
f
i
x
?
:
 
s
t
r
i
n
g
;


}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
5
 
t
e
x
t
-
l
e
f
t
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
<
I
c
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
3
x
l
 
m
d
:
t
e
x
t
-
4
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
<
N
u
m
b
e
r
F
l
o
w
 
v
a
l
u
e
=
{
v
a
l
u
e
}
 
/
>


 
 
 
 
 
 
 
 
{
s
u
f
f
i
x
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
{
s
u
f
f
i
x
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




t
y
p
e
 
P
l
a
n
 
=
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
t
a
g
l
i
n
e
:
 
s
t
r
i
n
g
;


 
 
p
r
i
c
e
:
 
n
u
m
b
e
r
;


 
 
p
r
i
c
e
L
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
t
r
i
a
l
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
f
e
a
t
u
r
e
s
:
 
{
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
i
n
c
l
u
d
e
d
:
 
b
o
o
l
e
a
n
 
}
[
]
;


 
 
c
t
a
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
h
r
e
f
:
 
s
t
r
i
n
g
 
}
;


 
 
h
i
g
h
l
i
g
h
t
e
d
?
:
 
b
o
o
l
e
a
n
;


}
;




c
o
n
s
t
 
P
L
A
N
S
:
 
P
l
a
n
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
s
t
a
r
t
e
r
"
,


 
 
 
 
n
a
m
e
:
 
"
S
t
a
r
t
e
r
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
F
o
r
 
a
 
s
i
n
g
l
e
 
f
o
u
n
d
e
r
 
m
a
k
i
n
g
 
t
h
e
 
f
i
r
s
t
 
h
i
r
e
s
.
"
,


 
 
 
 
p
r
i
c
e
:
 
0
,


 
 
 
 
p
r
i
c
e
L
a
b
e
l
:
 
"
/
f
o
r
e
v
e
r
"
,


 
 
 
 
t
r
i
a
l
:
 
n
u
l
l
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
1
 
r
e
c
r
u
i
t
e
r
 
s
e
a
t
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
2
 
a
c
t
i
v
e
 
j
o
b
 
p
o
s
t
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
B
a
s
i
c
 
A
T
S
 
p
i
p
e
l
i
n
e
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
E
m
a
i
l
-
o
n
l
y
 
n
o
t
i
f
i
c
a
t
i
o
n
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
P
a
y
r
o
l
l
,
 
l
e
a
v
e
,
 
r
e
v
i
e
w
s
"
,
 
i
n
c
l
u
d
e
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
A
d
v
a
n
c
e
d
 
a
n
a
l
y
t
i
c
s
"
,
 
i
n
c
l
u
d
e
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
P
r
i
o
r
i
t
y
 
s
u
p
p
o
r
t
"
,
 
i
n
c
l
u
d
e
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
]
,


 
 
 
 
c
t
a
:
 
{
 
l
a
b
e
l
:
 
"
S
t
a
r
t
 
f
r
e
e
"
,
 
h
r
e
f
:
 
"
/
r
e
c
r
u
i
t
e
r
/
r
e
g
i
s
t
e
r
"
 
}
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
g
r
o
w
t
h
"
,


 
 
 
 
n
a
m
e
:
 
"
G
r
o
w
t
h
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
S
m
a
l
l
 
t
e
a
m
s
 
r
u
n
n
i
n
g
 
r
e
g
u
l
a
r
 
h
i
r
i
n
g
 
c
y
c
l
e
s
.
"
,


 
 
 
 
p
r
i
c
e
:
 
2
9
9
9
,


 
 
 
 
p
r
i
c
e
L
a
b
e
l
:
 
"
/
m
o
"
,


 
 
 
 
t
r
i
a
l
:
 
"
7
-
d
a
y
 
f
r
e
e
 
t
r
i
a
l
,
 
n
o
 
c
a
r
d
"
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
5
 
r
e
c
r
u
i
t
e
r
 
s
e
a
t
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
U
n
l
i
m
i
t
e
d
 
j
o
b
 
p
o
s
t
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
M
u
l
t
i
-
r
o
u
n
d
 
p
i
p
e
l
i
n
e
s
 
a
n
d
 
p
a
n
e
l
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
P
a
y
r
o
l
l
,
 
l
e
a
v
e
,
 
a
t
t
e
n
d
a
n
c
e
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
P
e
r
f
o
r
m
a
n
c
e
 
r
e
v
i
e
w
 
c
y
c
l
e
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
H
R
 
a
n
a
l
y
t
i
c
s
 
d
a
s
h
b
o
a
r
d
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
P
r
i
o
r
i
t
y
 
s
u
p
p
o
r
t
"
,
 
i
n
c
l
u
d
e
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
]
,


 
 
 
 
c
t
a
:
 
{
 
l
a
b
e
l
:
 
"
S
t
a
r
t
 
7
-
d
a
y
 
t
r
i
a
l
"
,
 
h
r
e
f
:
 
"
/
r
e
c
r
u
i
t
e
r
/
r
e
g
i
s
t
e
r
?
p
l
a
n
=
g
r
o
w
t
h
"
 
}
,


 
 
 
 
h
i
g
h
l
i
g
h
t
e
d
:
 
t
r
u
e
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
c
a
l
e
"
,


 
 
 
 
n
a
m
e
:
 
"
S
c
a
l
e
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
C
a
m
p
u
s
 
d
r
i
v
e
s
 
a
n
d
 
5
0
+
 
e
m
p
l
o
y
e
e
 
o
r
g
s
.
"
,


 
 
 
 
p
r
i
c
e
:
 
9
9
9
9
,


 
 
 
 
p
r
i
c
e
L
a
b
e
l
:
 
"
/
m
o
"
,


 
 
 
 
t
r
i
a
l
:
 
"
7
-
d
a
y
 
f
r
e
e
 
t
r
i
a
l
,
 
n
o
 
c
a
r
d
"
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
U
n
l
i
m
i
t
e
d
 
r
e
c
r
u
i
t
e
r
 
s
e
a
t
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
U
n
l
i
m
i
t
e
d
 
j
o
b
 
p
o
s
t
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
C
a
m
p
u
s
 
d
r
i
v
e
s
 
a
n
d
 
b
u
l
k
 
h
i
r
i
n
g
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
F
u
l
l
 
H
R
 
s
t
a
c
k
,
 
a
l
l
 
1
4
 
m
o
d
u
l
e
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
C
o
m
p
l
i
a
n
c
e
 
a
n
d
 
a
p
p
r
o
v
a
l
 
w
o
r
k
f
l
o
w
s
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
S
S
O
,
 
a
u
d
i
t
 
l
o
g
s
,
 
R
B
A
C
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
D
e
d
i
c
a
t
e
d
 
s
u
c
c
e
s
s
 
m
a
n
a
g
e
r
"
,
 
i
n
c
l
u
d
e
d
:
 
t
r
u
e
 
}
,


 
 
 
 
]
,


 
 
 
 
c
t
a
:
 
{
 
l
a
b
e
l
:
 
"
S
t
a
r
t
 
7
-
d
a
y
 
t
r
i
a
l
"
,
 
h
r
e
f
:
 
"
/
r
e
c
r
u
i
t
e
r
/
r
e
g
i
s
t
e
r
?
p
l
a
n
=
s
c
a
l
e
"
 
}
,


 
 
}
,


]
;



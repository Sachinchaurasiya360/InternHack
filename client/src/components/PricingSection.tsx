
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
 
C
h
e
c
k
,
 
C
r
o
w
n
,
 
X
 
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
 
u
s
e
N
a
v
i
g
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
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
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
 
c
n
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
u
t
i
l
s
"
;




t
y
p
e
 
B
i
l
l
i
n
g
P
l
a
n
 
=
 
"
m
o
n
t
h
l
y
"
 
|
 
"
a
n
n
u
a
l
l
y
"
;




i
n
t
e
r
f
a
c
e
 
P
l
a
n
D
a
t
a
 
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


 
 
m
o
n
t
h
l
y
P
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


 
 
a
n
n
u
a
l
l
y
P
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
S
u
f
f
i
x
:
 
s
t
r
i
n
g
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


 
 
b
u
t
t
o
n
T
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


 
 
b
a
d
g
e
?
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
 
C
r
o
w
n
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
s
h
a
d
o
w
:
 
s
t
r
i
n
g
 
}
;


 
 
o
n
A
c
t
i
o
n
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
c
h
e
c
k
C
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
b
t
n
C
l
a
s
s
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
P
r
i
c
i
n
g
S
e
c
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
;


 
 
c
o
n
s
t
 
[
b
i
l
l
P
l
a
n
,
 
s
e
t
B
i
l
l
P
l
a
n
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
<
B
i
l
l
i
n
g
P
l
a
n
>
(
"
m
o
n
t
h
l
y
"
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
G
e
t
P
r
o
 
=
 
(
)
 
=
>
 
{


 
 
 
 
n
a
v
i
g
a
t
e
(
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
?
 
"
/
s
t
u
d
e
n
t
/
c
h
e
c
k
o
u
t
"
 
:
 
"
/
l
o
g
i
n
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
p
l
a
n
s
:
 
P
l
a
n
D
a
t
a
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
f
r
e
e
"
,


 
 
 
 
 
 
t
i
t
l
e
:
 
"
F
r
e
e
"
,


 
 
 
 
 
 
d
e
s
c
:
 
"
G
e
t
 
s
t
a
r
t
e
d
 
w
i
t
h
 
e
s
s
e
n
t
i
a
l
 
f
e
a
t
u
r
e
s
"
,


 
 
 
 
 
 
m
o
n
t
h
l
y
P
r
i
c
e
:
 
0
,


 
 
 
 
 
 
a
n
n
u
a
l
l
y
P
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
S
u
f
f
i
x
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
B
r
o
w
s
e
 
j
o
b
 
l
i
s
t
i
n
g
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
 
c
a
r
e
e
r
 
r
o
a
d
m
a
p
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
1
 
A
T
S
 
r
e
s
u
m
e
 
s
c
a
n
 
p
e
r
 
d
a
y
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
O
p
e
n
 
s
o
u
r
c
e
 
r
e
p
o
 
d
i
s
c
o
v
e
r
y
 
(
p
a
g
i
n
a
t
e
d
)
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
G
S
o
C
 
o
r
g
 
b
r
o
w
s
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


 
 
 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
F
i
r
s
t
 
P
R
 
&
 
G
i
t
 
g
u
i
d
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
3
 
r
e
p
o
 
s
u
g
g
e
s
t
i
o
n
s
 
/
 
m
o
n
t
h
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
 
A
T
S
 
s
c
a
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
F
u
l
l
 
O
S
S
 
a
n
a
l
y
t
i
c
s
 
&
 
t
r
e
n
d
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
p
o
 
s
u
g
g
e
s
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
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
b
u
t
t
o
n
T
e
x
t
:
 
"
S
i
g
n
 
U
p
 
F
r
e
e
"
,


 
 
 
 
 
 
o
n
A
c
t
i
o
n
:
 
(
)
 
=
>
 
n
a
v
i
g
a
t
e
(
"
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
)
,


 
 
 
 
 
 
c
h
e
c
k
C
o
l
o
r
:
 
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
"
,


 
 
 
 
 
 
b
t
n
C
l
a
s
s
:


 
 
 
 
 
 
 
 
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
1
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
w
h
i
t
e
/
9
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
2
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
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
p
r
o
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
r
o
"
,


 
 
 
 
 
 
d
e
s
c
:
 
"
F
u
l
l
 
a
c
c
e
s
s
 
t
o
 
a
l
l
 
p
r
e
m
i
u
m
 
f
e
a
t
u
r
e
s
"
,


 
 
 
 
 
 
m
o
n
t
h
l
y
P
r
i
c
e
:
 
2
4
9
,


 
 
 
 
 
 
a
n
n
u
a
l
l
y
P
r
i
c
e
:
 
2
4
9
9
,


 
 
 
 
 
 
p
r
i
c
e
S
u
f
f
i
x
:
 
"
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
 
i
n
 
F
r
e
e
 
p
l
a
n
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
 
A
T
S
 
s
c
a
n
s
 
&
 
A
I
 
t
i
p
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
L
a
T
e
X
 
r
e
s
u
m
e
 
e
d
i
t
o
r
 
&
 
c
o
v
e
r
 
l
e
t
t
e
r
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
F
u
l
l
 
D
S
A
,
 
S
Q
L
 
&
 
a
p
t
i
t
u
d
e
 
p
r
a
c
t
i
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
r
o
c
t
o
r
e
d
 
s
k
i
l
l
 
v
e
r
i
f
i
c
a
t
i
o
n
 
t
e
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
r
e
e
r
 
r
o
a
d
m
a
p
s
 
w
i
t
h
 
p
r
o
g
r
e
s
s
 
t
r
a
c
k
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
 
O
S
S
 
a
n
a
l
y
t
i
c
s
 
&
 
c
o
n
t
r
i
b
u
t
i
o
n
 
t
r
e
n
d
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
 
r
e
p
o
 
s
u
g
g
e
s
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
G
S
o
C
 
p
r
o
p
o
s
a
l
 
b
u
i
l
d
e
r
 
&
 
p
r
o
g
r
a
m
 
t
r
a
c
k
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


 
 
 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
V
e
r
i
f
i
e
d
 
c
e
r
t
i
f
i
c
a
t
e
 
w
i
t
h
 
b
a
d
g
e
 
U
R
L
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


 
 
 
 
 
 
b
u
t
t
o
n
T
e
x
t
:
 
"
G
e
t
 
P
r
o
"
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


 
 
 
 
 
 
b
a
d
g
e
:
 
{


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
R
e
c
o
m
m
e
n
d
e
d
"
,


 
 
 
 
 
 
 
 
i
c
o
n
:
 
C
r
o
w
n
,


 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
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
"
,


 
 
 
 
 
 
 
 
s
h
a
d
o
w
:
 
"
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
3
0
"
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
o
n
A
c
t
i
o
n
:
 
h
a
n
d
l
e
G
e
t
P
r
o
,


 
 
 
 
 
 
c
h
e
c
k
C
o
l
o
r
:
 
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
,


 
 
 
 
 
 
b
t
n
C
l
a
s
s
:
 
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
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
i
n
g
 
*
/
}


 
 
 
 
 
 
 
 
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
6
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


 
 
 
 
 
 
 
 
 
 
 
 
p
r
i
c
i
n
g


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
₹
2
4
9
 
t
o
 
w
i
n
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


 
 
 
 
 
 
 
 
 
 
 
 
U
s
e
 
t
h
e
 
c
o
r
e
 
s
t
a
c
k
 
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
 
z
e
r
o
.
 
U
n
l
o
c
k
 
t
h
e
 
A
I
-
h
e
a
v
y
 
w
o
r
k
f
l
o
w
s


 
 
 
 
 
 
 
 
 
 
 
 
w
h
e
n
 
y
o
u
 
a
r
e
 
r
e
a
d
y
 
t
o
 
s
p
r
i
n
t
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




 
 
 
 
 
 
 
 
{
/
*
 
B
i
l
l
i
n
g
 
t
o
g
g
l
e
 
*
/
}


 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
0
.
1
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
4
 
m
b
-
1
4
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
P
l
a
n
 
=
=
=
 
"
m
o
n
t
h
l
y
"
 
?
 
"
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
 
:
 
"
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
M
o
n
t
h
l
y


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
B
i
l
l
P
l
a
n
(
(
p
)
 
=
>
 
(
p
 
=
=
=
 
"
m
o
n
t
h
l
y
"
 
?
 
"
a
n
n
u
a
l
l
y
"
 
:
 
"
m
o
n
t
h
l
y
"
)
)


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
s
w
i
t
c
h
"


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
h
e
c
k
e
d
=
{
b
i
l
l
P
l
a
n
 
=
=
=
 
"
a
n
n
u
a
l
l
y
"
}


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
T
o
g
g
l
e
 
b
i
l
l
i
n
g
 
f
r
e
q
u
e
n
c
y
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
2
 
h
-
6
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
P
l
a
n
 
=
=
=
 
"
a
n
n
u
a
l
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
3
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
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
0
.
5
 
l
e
f
t
-
0
.
5
 
w
-
5
 
h
-
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
w
h
i
t
e
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
P
l
a
n
 
=
=
=
 
"
a
n
n
u
a
l
l
y
"
 
&
&
 
"
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
6
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
P
l
a
n
 
=
=
=
 
"
a
n
n
u
a
l
l
y
"
 
?
 
"
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
 
:
 
"
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
A
n
n
u
a
l
l
y


 
 
 
 
 
 
 
 
 
 
 
 
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
l
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
 
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
a
v
e
 
2
5
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
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
a
r
d
s
 
*
/
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
2
 
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


 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
s
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
 
3
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
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
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
c
n
(


 
 
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
,


 
 
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
"


 
 
 
 
:
 
"
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
/
4
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
"


)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
a
d
g
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
b
a
d
g
e
 
&
&
 
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
.
5
 
l
e
f
t
-
1
/
2
 
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
x
-
1
/
2
 
z
-
1
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
 
p
x
-
4
 
p
y
-
1
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
f
u
l
l
 
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
s
e
m
i
b
o
l
d
 
s
h
a
d
o
w
-
l
g
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
b
a
d
g
e
.
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
b
a
d
g
e
.
s
h
a
d
o
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
l
a
n
.
b
a
d
g
e
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
b
a
d
g
e
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
+
 
P
r
i
c
e
 
*
/
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
6
 
m
d
:
p
-
8
 
p
b
-
0
"
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
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
m
b
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
g
r
a
y
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
w
h
i
t
e
/
4
0
 
m
b
-
4
"
>
{
p
l
a
n
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
i
d
 
=
=
=
 
"
f
r
e
e
"
 
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
g
r
a
y
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
w
h
i
t
e
/
4
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
g
r
a
y
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
w
h
i
t
e
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
g
r
a
y
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
w
h
i
t
e
/
4
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
f
o
r
e
v
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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
w
h
i
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
P
l
a
n
 
=
=
=
 
"
m
o
n
t
h
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
p
l
a
n
.
m
o
n
t
h
l
y
P
r
i
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
p
l
a
n
.
a
n
n
u
a
l
l
y
P
r
i
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
:
 
"
c
u
r
r
e
n
c
y
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
c
y
:
 
"
I
N
R
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
i
m
u
m
F
r
a
c
t
i
o
n
D
i
g
i
t
s
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
i
m
u
m
F
r
a
c
t
i
o
n
D
i
g
i
t
s
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
i
l
l
P
l
a
n
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
 
1
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
1
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
1
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
g
r
a
y
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
w
h
i
t
e
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
{
b
i
l
l
P
l
a
n
 
=
=
=
 
"
m
o
n
t
h
l
y
"
 
?
 
"
m
o
"
 
:
 
"
y
r
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
s
 
*
/
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
x
-
6
 
m
d
:
p
x
-
8
 
p
t
-
4
 
p
b
-
8
 
f
l
e
x
-
1
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
g
r
a
y
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
w
h
i
t
e
/
5
0
 
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
r
 
m
b
-
3
 
b
l
o
c
k
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
s
p
a
n
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
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
c
h
e
c
k
C
o
l
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
g
r
a
y
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
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
t
e
x
t
-
s
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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
w
h
i
t
e
/
6
0
"
 
:
 
"
t
e
x
t
-
g
r
a
y
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
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
u
t
t
o
n
 
+
 
b
i
l
l
i
n
g
 
n
o
t
e
 
*
/
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
x
-
6
 
m
d
:
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
p
l
a
n
.
o
n
A
c
t
i
o
n
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
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
b
l
o
c
k
 
w
-
f
u
l
l
 
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
 
p
y
-
3
.
5
 
p
x
-
6
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
b
t
n
C
l
a
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
b
u
t
t
o
n
T
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
i
d
 
!
=
=
 
"
f
r
e
e
"
 
&
&
 
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
h
-
7
 
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
 
w
-
f
u
l
l
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
b
i
l
l
P
l
a
n
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
 
1
6
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
1
6
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
2
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
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
/
3
0
 
m
t
-
2
 
b
l
o
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
i
l
l
P
l
a
n
 
=
=
=
 
"
m
o
n
t
h
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
B
i
l
l
e
d
 
m
o
n
t
h
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
B
i
l
l
e
d
 
i
n
 
o
n
e
 
a
n
n
u
a
l
 
p
a
y
m
e
n
t
"
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


 
 
)
;


}



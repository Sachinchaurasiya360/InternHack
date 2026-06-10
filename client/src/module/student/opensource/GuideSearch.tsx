
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
,
 
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
R
e
f
,
 
u
s
e
C
a
l
l
b
a
c
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
 
S
e
a
r
c
h
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
 
o
p
e
n
S
o
u
r
c
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
o
p
e
n
-
s
o
u
r
c
e
-
g
u
i
d
e
.
j
s
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
 
g
i
t
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
i
t
-
c
h
e
a
t
s
h
e
e
t
.
j
s
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
 
g
s
o
c
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
s
o
c
-
p
r
o
p
o
s
a
l
-
g
u
i
d
e
.
j
s
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
 
c
i
c
d
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
i
c
d
-
g
u
i
d
e
.
j
s
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
 
c
o
d
e
b
a
s
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
o
d
e
b
a
s
e
-
g
u
i
d
e
.
j
s
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
 
c
o
m
m
u
n
i
c
a
t
i
o
n
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
o
m
m
u
n
i
c
a
t
i
o
n
-
t
e
m
p
l
a
t
e
s
.
j
s
o
n
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
 
S
t
e
p
 
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
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


}




i
n
t
e
r
f
a
c
e
 
S
e
a
r
c
h
R
e
s
u
l
t
 
{


 
 
g
u
i
d
e
N
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


 
 
g
u
i
d
e
P
a
t
h
:
 
s
t
r
i
n
g
;


 
 
s
t
e
p
T
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


 
 
s
t
e
p
I
d
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
G
U
I
D
E
S
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
F
i
r
s
t
 
P
R
 
R
o
a
d
m
a
p
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
,
 
s
t
e
p
s
:
 
o
p
e
n
S
o
u
r
c
e
D
a
t
a
.
o
p
e
n
S
o
u
r
c
e
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
 
}
,


 
 
{
 
n
a
m
e
:
 
"
G
i
t
 
f
o
r
 
O
p
e
n
 
S
o
u
r
c
e
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
g
i
t
-
g
u
i
d
e
"
,
 
s
t
e
p
s
:
 
g
i
t
D
a
t
a
.
g
i
t
C
h
e
a
t
s
h
e
e
t
 
a
s
 
S
t
e
p
[
]
 
}
,


 
 
{
 
n
a
m
e
:
 
"
G
S
o
C
 
P
r
o
p
o
s
a
l
 
G
u
i
d
e
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
"
,
 
s
t
e
p
s
:
 
g
s
o
c
D
a
t
a
.
g
s
o
c
P
r
o
p
o
s
a
l
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
 
}
,


 
 
{
 
n
a
m
e
:
 
"
C
I
/
C
D
 
B
a
s
i
c
s
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
c
i
c
d
"
,
 
s
t
e
p
s
:
 
c
i
c
d
D
a
t
a
.
c
i
c
d
G
u
i
d
e
 
a
s
 
S
t
e
p
[
]
 
}
,


 
 
{
 
n
a
m
e
:
 
"
R
e
a
d
 
a
 
C
o
d
e
b
a
s
e
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
r
e
a
d
-
c
o
d
e
b
a
s
e
"
,
 
s
t
e
p
s
:
 
c
o
d
e
b
a
s
e
D
a
t
a
.
c
o
d
e
b
a
s
e
G
u
i
d
e
 
a
s
 
S
t
e
p
[
]
 
}
,


 
 
{
 
n
a
m
e
:
 
"
C
o
m
m
u
n
i
c
a
t
i
o
n
 
T
e
m
p
l
a
t
e
s
"
,
 
p
a
t
h
:
 
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
o
p
e
n
s
o
u
r
c
e
/
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,
 
s
t
e
p
s
:
 
c
o
m
m
u
n
i
c
a
t
i
o
n
D
a
t
a
.
c
o
m
m
u
n
i
c
a
t
i
o
n
G
u
i
d
e
 
a
s
 
S
t
e
p
[
]
 
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
 
f
u
n
c
t
i
o
n
 
G
u
i
d
e
S
e
a
r
c
h
(
)
 
{


 
 
c
o
n
s
t
 
[
q
u
e
r
y
,
 
s
e
t
Q
u
e
r
y
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
"
"
)
;


 
 
c
o
n
s
t
 
[
r
e
s
u
l
t
s
,
 
s
e
t
R
e
s
u
l
t
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
<
S
e
a
r
c
h
R
e
s
u
l
t
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
i
s
O
p
e
n
,
 
s
e
t
I
s
O
p
e
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
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
I
n
d
e
x
,
 
s
e
t
A
c
t
i
v
e
I
n
d
e
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


 
 
c
o
n
s
t
 
i
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
d
e
b
o
u
n
c
e
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
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
>
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
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
 
s
e
a
r
c
h
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
q
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
q
.
t
r
i
m
(
)
)
 
{
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;
 
r
e
t
u
r
n
;
 
}


 
 
 
 
c
o
n
s
t
 
l
o
w
e
r
 
=
 
q
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
c
o
n
s
t
 
f
o
u
n
d
:
 
S
e
a
r
c
h
R
e
s
u
l
t
[
]
 
=
 
[
]
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
g
u
i
d
e
 
o
f
 
G
U
I
D
E
S
)
 
{


 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
s
t
e
p
 
o
f
 
g
u
i
d
e
.
s
t
e
p
s
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
s
t
e
p
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
l
o
w
e
r
)
 
|
|
 
s
t
e
p
.
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
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
l
o
w
e
r
)
)
 
{


 
 
 
 
 
 
 
 
 
 
f
o
u
n
d
.
p
u
s
h
(
{
 
g
u
i
d
e
N
a
m
e
:
 
g
u
i
d
e
.
n
a
m
e
,
 
g
u
i
d
e
P
a
t
h
:
 
g
u
i
d
e
.
p
a
t
h
,
 
s
t
e
p
T
i
t
l
e
:
 
s
t
e
p
.
t
i
t
l
e
,
 
s
t
e
p
I
d
:
 
s
t
e
p
.
i
d
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
s
e
t
R
e
s
u
l
t
s
(
f
o
u
n
d
)
;


 
 
 
 
s
e
t
I
s
O
p
e
n
(
f
o
u
n
d
.
l
e
n
g
t
h
 
>
 
0
)
;


 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
0
)
;


 
 
}
,
 
[
]
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


 
 
 
 
i
f
 
(
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
 
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
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
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
a
r
c
h
(
q
u
e
r
y
)
,
 
2
0
0
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
 
{
 
i
f
 
(
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
 
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
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
;
 
}
;


 
 
}
,
 
[
q
u
e
r
y
,
 
s
e
a
r
c
h
]
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
K
e
y
D
o
w
n
 
=
 
(
e
:
 
R
e
a
c
t
.
K
e
y
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
s
c
a
p
e
"
)
 
{
 
s
e
t
Q
u
e
r
y
(
"
"
)
;
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;
 
}


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
A
r
r
o
w
D
o
w
n
"
)
 
{
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
(
i
)
 
=
>
 
M
a
t
h
.
m
i
n
(
i
 
+
 
1
,
 
r
e
s
u
l
t
s
.
l
e
n
g
t
h
 
-
 
1
)
)
;
 
}


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
A
r
r
o
w
U
p
"
)
 
{
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
(
i
)
 
=
>
 
M
a
t
h
.
m
a
x
(
i
 
-
 
1
,
 
0
)
)
;
 
}


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
 
&
&
 
r
e
s
u
l
t
s
[
a
c
t
i
v
e
I
n
d
e
x
]
)
 
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
`
$
{
r
e
s
u
l
t
s
[
a
c
t
i
v
e
I
n
d
e
x
]
.
g
u
i
d
e
P
a
t
h
}
#
$
{
r
e
s
u
l
t
s
[
a
c
t
i
v
e
I
n
d
e
x
]
.
s
t
e
p
I
d
}
`
)
;


 
 
 
 
 
 
s
e
t
Q
u
e
r
y
(
"
"
)
;
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
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
S
e
l
e
c
t
 
=
 
(
r
e
s
u
l
t
:
 
S
e
a
r
c
h
R
e
s
u
l
t
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
`
$
{
r
e
s
u
l
t
.
g
u
i
d
e
P
a
t
h
}
#
$
{
r
e
s
u
l
t
.
s
t
e
p
I
d
}
`
)
;


 
 
 
 
s
e
t
Q
u
e
r
y
(
"
"
)
;
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;


 
 
}
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
r
e
l
a
t
i
v
e
 
m
b
-
6
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
 
p
x
-
3
 
p
y
-
2
 
f
o
c
u
s
-
w
i
t
h
i
n
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
 
d
a
r
k
:
f
o
c
u
s
-
w
i
t
h
i
n
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
S
e
a
r
c
h
 
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
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
i
n
p
u
t
R
e
f
}


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
u
e
r
y
}


 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
Q
u
e
r
y
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
h
a
n
d
l
e
K
e
y
D
o
w
n
}


 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
g
u
i
d
e
s
…
 
t
r
y
 
'
r
e
b
a
s
e
'
 
o
r
 
'
u
p
s
t
r
e
a
m
'
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
f
l
e
x
-
1
 
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
 
p
l
a
c
e
h
o
l
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
4
0
0
 
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
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
S
e
a
r
c
h
 
o
p
e
n
 
s
o
u
r
c
e
 
g
u
i
d
e
s
"


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
e
x
p
a
n
d
e
d
=
{
i
s
O
p
e
n
}


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
a
u
t
o
c
o
m
p
l
e
t
e
=
"
l
i
s
t
"


 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
c
o
m
b
o
b
o
x
"


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
{
q
u
e
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
 
{
 
s
e
t
Q
u
e
r
y
(
"
"
)
;
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;
 
i
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
f
o
c
u
s
(
)
;
 
}
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
C
l
e
a
r
 
s
e
a
r
c
h
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
o
v
e
r
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
7
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
2
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
i
s
O
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
u
l


 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
l
i
s
t
b
o
x
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
a
b
s
o
l
u
t
e
 
z
-
5
0
 
m
t
-
1
 
w
-
f
u
l
l
 
m
a
x
-
h
-
7
2
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
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
 
s
h
a
d
o
w
-
x
l
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
s
.
m
a
p
(
(
r
e
s
u
l
t
,
 
i
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
`
$
{
r
e
s
u
l
t
.
g
u
i
d
e
P
a
t
h
}
-
$
{
r
e
s
u
l
t
.
s
t
e
p
I
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
o
p
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
s
e
l
e
c
t
e
d
=
{
i
 
=
=
=
 
a
c
t
i
v
e
I
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
n
d
l
e
S
e
l
e
c
t
(
r
e
s
u
l
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
E
n
t
e
r
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
i
)
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
`
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
 
g
a
p
-
0
.
5
 
p
x
-
4
 
p
y
-
3
 
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
1
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
5
 
l
a
s
t
:
b
o
r
d
e
r
-
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
 
=
=
=
 
a
c
t
i
v
e
I
n
d
e
x
 
?
 
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
8
0
0
"
 
:
 
"
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
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
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
"
t
e
x
t
-
[
1
0
p
x
]
 
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
r
e
s
u
l
t
.
g
u
i
d
e
N
a
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
5
0
"
>
{
r
e
s
u
l
t
.
s
t
e
p
T
i
t
l
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


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}



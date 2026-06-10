
i
m
p
o
r
t
 
R
e
a
c
t
 
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
 
m
o
t
i
o
n
 
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


 
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,
 
T
r
o
p
h
y
,
 
A
w
a
r
d
,
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,


 
 
B
o
o
k
O
p
e
n
,
 
G
i
t
B
r
a
n
c
h
,
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,
 
S
e
t
t
i
n
g
s
,


 
 
t
y
p
e
 
L
u
c
i
d
e
I
c
o
n
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
 
}
 
f
r
o
m
 
"
.
/
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
 
G
u
i
d
a
n
c
e
C
a
r
d
 
{


 
 
t
o
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
 
L
u
c
i
d
e
I
c
o
n
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
i
n
u
t
e
s
:
 
n
u
m
b
e
r
;


 
 
s
t
e
p
s
:
 
n
u
m
b
e
r
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
A
N
C
E
_
C
A
R
D
S
:
 
G
u
i
d
a
n
c
e
C
a
r
d
[
]
 
=
 
[


 
 
{
 
t
o
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
 
i
c
o
n
:
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,
 
t
i
t
l
e
:
 
"
Y
o
u
r
 
F
i
r
s
t
 
C
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
"
,
 
d
e
s
c
:
 
"
1
0
 
s
t
e
p
s
 
f
r
o
m
 
z
e
r
o
 
t
o
 
y
o
u
r
 
f
i
r
s
t
 
m
e
r
g
e
d
 
P
R
"
,
 
m
i
n
u
t
e
s
:
 
4
5
,
 
s
t
e
p
s
:
 
1
0
 
}
,


 
 
{
 
t
o
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
"
,
 
i
c
o
n
:
 
T
r
o
p
h
y
,
 
t
i
t
l
e
:
 
"
G
S
o
C
 
R
e
p
o
s
"
,
 
d
e
s
c
:
 
"
O
r
g
a
n
i
s
a
t
i
o
n
s
 
a
c
c
e
p
t
e
d
 
i
n
t
o
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,
 
m
i
n
u
t
e
s
:
 
3
0
,
 
s
t
e
p
s
:
 
6
 
}
,


 
 
{
 
t
o
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
 
i
c
o
n
:
 
A
w
a
r
d
,
 
t
i
t
l
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
 
d
e
s
c
:
 
"
W
r
i
t
e
 
a
 
w
i
n
n
i
n
g
 
p
r
o
p
o
s
a
l
 
i
n
 
8
 
s
t
e
p
s
"
,
 
m
i
n
u
t
e
s
:
 
6
0
,
 
s
t
e
p
s
:
 
8
 
}
,


 
 
{
 
t
o
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
p
r
o
g
r
a
m
s
"
,
 
i
c
o
n
:
 
G
r
a
d
u
a
t
i
o
n
C
a
p
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
g
r
a
m
 
T
r
a
c
k
e
r
"
,
 
d
e
s
c
:
 
"
D
e
a
d
l
i
n
e
s
 
f
o
r
 
G
S
o
C
,
 
L
F
X
,
 
M
L
H
,
 
O
u
t
r
e
a
c
h
y
"
,
 
m
i
n
u
t
e
s
:
 
2
0
,
 
s
t
e
p
s
:
 
4
 
}
,


 
 
{
 
t
o
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
 
i
c
o
n
:
 
B
o
o
k
O
p
e
n
,
 
t
i
t
l
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
 
d
e
s
c
:
 
"
U
n
d
e
r
s
t
a
n
d
 
u
n
f
a
m
i
l
i
a
r
 
c
o
d
e
 
l
i
k
e
 
a
 
s
e
n
i
o
r
"
,
 
m
i
n
u
t
e
s
:
 
4
5
,
 
s
t
e
p
s
:
 
7
 
}
,


 
 
{
 
t
o
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
 
i
c
o
n
:
 
G
i
t
B
r
a
n
c
h
,
 
t
i
t
l
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
 
d
e
s
c
:
 
"
F
o
r
k
 
t
o
 
P
R
 
w
o
r
k
f
l
o
w
 
w
i
t
h
 
c
o
p
y
,
 
p
a
s
t
e
 
c
o
m
m
a
n
d
s
"
,
 
m
i
n
u
t
e
s
:
 
4
5
,
 
s
t
e
p
s
:
 
8
 
}
,


 
 
{
 
t
o
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
 
i
c
o
n
:
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,
 
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
 
d
e
s
c
:
 
"
I
s
s
u
e
s
,
 
P
R
s
,
 
r
e
v
i
e
w
s
 
a
n
d
 
b
u
g
 
r
e
p
o
r
t
s
"
,
 
m
i
n
u
t
e
s
:
 
3
0
,
 
s
t
e
p
s
:
 
5
 
}
,


 
 
{
 
t
o
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
 
i
c
o
n
:
 
S
e
t
t
i
n
g
s
,
 
t
i
t
l
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
 
d
e
s
c
:
 
"
F
i
x
 
l
i
n
t
,
 
t
e
s
t
 
a
n
d
 
b
u
i
l
d
 
e
r
r
o
r
s
"
,
 
m
i
n
u
t
e
s
:
 
6
0
,
 
s
t
e
p
s
:
 
6
 
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
 
c
o
n
s
t
 
G
u
i
d
a
n
c
e
C
a
r
d
s
 
=
 
R
e
a
c
t
.
m
e
m
o
(
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
a
n
c
e
C
a
r
d
s
(
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
m
b
-
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
 
m
b
-
3
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
=
"
t
r
u
e
"
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
>


 
 
 
 
 
 
 
 
 
 
g
u
i
d
e
s
 
/
 
p
l
a
y
 
i
t
 
l
i
k
e
 
a
 
s
e
n
i
o
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
d
i
v
>




 
 
 
 
 
 
<
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
 
s
m
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
 
l
g
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
l
 
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


 
 
 
 
 
 
 
 
r
o
l
e
=
"
n
a
v
i
g
a
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
l
a
b
e
l
=
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
 
l
e
a
r
n
i
n
g
 
g
u
i
d
e
s
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
G
U
I
D
A
N
C
E
_
C
A
R
D
S
.
m
a
p
(
(
c
a
r
d
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
c
a
r
d
.
t
o
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
e
l
a
y
:
 
0
.
0
5
 
+
 
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
,
 
6
)
 
*
 
0
.
0
4
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
3
5
 
}
}


 
 
 
 
 
 
 
 
 
 
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
c
a
r
d
.
t
o
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
{
`
O
p
e
n
 
g
u
i
d
e
:
 
$
{
c
a
r
d
.
t
i
t
l
e
}
`
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
g
r
o
u
p
 
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
 
g
a
p
-
3
 
p
-
4
 
h
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
"
 
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
=
"
t
r
u
e
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
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
w
-
8
 
h
-
8
 
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
5
 
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
c
a
r
d
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
"
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
i
d
e
 
t
h
e
 
v
i
s
u
a
l
 
t
e
x
t
 
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
 
r
e
a
d
e
r
s
 
s
o
 
t
h
e
y
 
o
n
l
y
 
h
e
a
r
 
t
h
e
 
c
l
e
a
n
e
r
 
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
 
o
n
 
t
h
e
 
L
i
n
k
 
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
1
"
 
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
=
"
t
r
u
e
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
r
d
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
x
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
i
n
e
-
c
l
a
m
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
r
d
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
5
0
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
~
{
c
a
r
d
.
m
i
n
u
t
e
s
}
 
m
i
n
 
&
m
i
d
d
o
t
;
 
{
c
a
r
d
.
s
t
e
p
s
}
 
s
t
e
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
L
i
n
k
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


 
 
)
;


}
)
;



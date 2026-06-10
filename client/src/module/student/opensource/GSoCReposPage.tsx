
i
m
p
o
r
t
 
{
 
m
e
m
o
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
S
t
a
t
e
,
 
t
y
p
e
 
R
e
a
c
t
N
o
d
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
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
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
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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


 
 
S
e
a
r
c
h
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,


 
 
T
r
o
p
h
y
,


 
 
C
h
e
v
r
o
n
D
o
w
n
,


 
 
X
,


 
 
C
o
d
e
2
,


 
 
G
l
o
b
e
,


 
 
C
a
l
e
n
d
a
r
,


 
 
L
a
y
e
r
s
,


 
 
T
a
g
,


 
 
U
s
e
r
s
,


 
 
M
a
i
l
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


 
 
L
i
g
h
t
b
u
l
b
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


 
 
A
r
r
o
w
U
p
R
i
g
h
t
,


 
 
H
e
a
r
t
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
 
a
p
i
 
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
.
.
/
l
i
b
/
a
x
i
o
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
 
q
u
e
r
y
K
e
y
s
 
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
.
.
/
l
i
b
/
q
u
e
r
y
-
k
e
y
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
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
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
L
o
a
d
i
n
g
S
c
r
e
e
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
 
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
 
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
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
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
 
t
y
p
e
 
{
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
,
 
G
S
o
C
S
t
a
t
s
 
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
.
.
/
l
i
b
/
t
y
p
e
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
 
m
a
r
k
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;




c
o
n
s
t
 
W
I
S
H
L
I
S
T
_
K
E
Y
 
=
 
"
g
s
o
c
_
w
i
s
h
l
i
s
t
"
;




f
u
n
c
t
i
o
n
 
u
s
e
W
i
s
h
l
i
s
t
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
i
s
h
l
i
s
t
,
 
s
e
t
W
i
s
h
l
i
s
t
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
n
u
m
b
e
r
[
]
>
(
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
J
S
O
N
.
p
a
r
s
e
(
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
W
I
S
H
L
I
S
T
_
K
E
Y
)
 
?
?
 
"
[
]
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
A
r
r
a
y
.
i
s
A
r
r
a
y
(
p
a
r
s
e
d
)
 
?
 
p
a
r
s
e
d
 
:
 
[
]
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[
]
;


 
 
 
 
}


 
 
}
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
 
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
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
s
e
t
W
i
s
h
l
i
s
t
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
p
r
e
v
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
i
d
)


 
 
 
 
 
 
 
 
?
 
p
r
e
v
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
x
 
!
=
=
 
i
d
)


 
 
 
 
 
 
 
 
:
 
[
.
.
.
p
r
e
v
,
 
i
d
]
;


 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
W
I
S
H
L
I
S
T
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
n
e
x
t
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
}
)
;


 
 
}
,
 
[
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
s
 
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
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
w
i
s
h
l
i
s
t
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
i
d
)
,
 
[
w
i
s
h
l
i
s
t
]
)
;


 
 
r
e
t
u
r
n
 
{
 
w
i
s
h
l
i
s
t
,
 
t
o
g
g
l
e
,
 
h
a
s
 
}
;


}




c
o
n
s
t
 
c
a
r
d
B
a
s
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
 
h
-
f
u
l
l
 
w
-
f
u
l
l
 
f
l
e
x
-
c
o
l
 
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
 
b
g
-
w
h
i
t
e
 
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
3
0
"
;




f
u
n
c
t
i
o
n
 
E
d
i
t
o
r
i
a
l
L
a
b
e
l
(
{
 
c
h
i
l
d
r
e
n
 
}
:
 
{
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
 
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
c
h
i
l
d
r
e
n
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




f
u
n
c
t
i
o
n
 
O
r
g
M
a
r
k
(
{
 
o
r
g
 
}
:
 
{
 
o
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
 
}
)
 
{


 
 
i
f
 
(
o
r
g
.
i
m
a
g
e
U
r
l
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
i
m
g


 
 
 
 
 
 
 
 
s
r
c
=
{
o
r
g
.
i
m
a
g
e
U
r
l
}


 
 
 
 
 
 
 
 
a
l
t
=
{
o
r
g
.
n
a
m
e
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
0
 
w
-
1
0
 
s
h
r
i
n
k
-
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
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
 
p
-
1
 
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


 
 
 
 
 
 
/
>


 
 
 
 
)
;


 
 
}




 
 
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
l
e
x
 
h
-
1
0
 
w
-
1
0
 
s
h
r
i
n
k
-
0
 
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
o
r
g
.
n
a
m
e
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
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




f
u
n
c
t
i
o
n
 
M
e
t
a
C
h
i
p
(
{


 
 
i
c
o
n
,


 
 
c
h
i
l
d
r
e
n
,


}
:
 
{


 
 
i
c
o
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
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
 
p
x
-
2
.
5
 
p
y
-
1
 
t
e
x
t
-
[
1
1
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
r
 
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
"
>
{
i
c
o
n
}
<
/
s
p
a
n
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
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
 
P
l
a
i
n
C
h
i
p
(
{


 
 
c
h
i
l
d
r
e
n
,


 
 
a
c
c
e
n
t
 
=
 
f
a
l
s
e
,


}
:
 
{


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
a
c
c
e
n
t
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


 
 
 
 
 
 
 
 
a
c
c
e
n
t


 
 
 
 
 
 
 
 
 
 
?
 
"
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
l
i
m
e
-
4
0
0
 
p
x
-
2
 
p
y
-
0
.
5
 
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
r
 
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


 
 
 
 
 
 
 
 
 
 
:
 
"
r
o
u
n
d
e
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
 
p
x
-
2
 
p
y
-
0
.
5
 
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
r
 
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


 
 
 
 
 
 
}


 
 
 
 
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
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
 
E
m
p
t
y
S
t
a
t
e
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
d
a
s
h
e
d
 
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
 
p
y
-
2
0
 
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
 
f
l
e
x
-
c
o
l
 
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
f
l
e
x
 
h
-
1
2
 
w
-
1
2
 
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
>


 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
h
-
5
 
w
-
5
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


 
 
 
 
 
 
 
 
 
 
N
o
 
o
r
g
a
n
i
z
a
t
i
o
n
s
 
f
o
u
n
d


 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
t
r
y
 
d
i
f
f
e
r
e
n
t
 
s
e
a
r
c
h
 
c
r
i
t
e
r
i
a


 
 
 
 
 
 
 
 
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
 
F
i
l
t
e
r
D
r
o
p
d
o
w
n
(
{


 
 
l
a
b
e
l
,


 
 
i
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


 
 
o
p
t
i
o
n
s
,


 
 
o
n
C
h
a
n
g
e
,


}
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


 
 
i
c
o
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
v
a
l
u
e
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
o
n
C
h
a
n
g
e
:
 
(
v
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
 
v
o
i
d
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
o
u
p
"
>


 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
h
-
1
0
 
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
 
b
g
-
w
h
i
t
e
 
p
x
-
3
 
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
6
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
3
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
{
i
c
o
n
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
m
a
x
-
w
-
2
8
 
t
r
u
n
c
a
t
e
 
f
o
n
t
-
b
o
l
d
 
n
o
r
m
a
l
-
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
n
o
r
m
a
l
 
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
v
a
l
u
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
C
h
e
v
r
o
n
D
o
w
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
3
.
5
 
w
-
3
.
5
 
o
p
a
c
i
t
y
-
6
0
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
 
l
e
f
t
-
0
 
t
o
p
-
f
u
l
l
 
z
-
2
0
 
m
t
-
1
 
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
h
-
8
0
 
m
i
n
-
w
-
5
6
 
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
m
d
 
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
 
b
g
-
w
h
i
t
e
 
p
-
1
 
s
h
a
d
o
w
-
x
l
 
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
l
o
c
k
 
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
>


 
 
 
 
 
 
 
 
{
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
o
p
t
 
=
=
=
 
v
a
l
u
e
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
n
C
h
a
n
g
e
(
o
p
t
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
 
w
-
f
u
l
l
 
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
 
g
a
p
-
3
 
r
o
u
n
d
e
d
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
l
e
f
t
 
t
e
x
t
-
s
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
 
$
{
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
9
0
0
 
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
5
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
9
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
t
o
n
e
-
6
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
1
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
r
u
n
c
a
t
e
"
>
{
o
p
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
&
&
 
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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




f
u
n
c
t
i
o
n
 
P
a
r
t
i
c
i
p
a
t
i
o
n
B
a
r
(
{
 
p
a
r
t
i
c
i
p
a
t
e
d
Y
e
a
r
s
 
}
:
 
{
 
p
a
r
t
i
c
i
p
a
t
e
d
Y
e
a
r
s
:
 
n
u
m
b
e
r
[
]
 
}
)
 
{


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
Y
e
a
r
 
=
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
;


 
 
c
o
n
s
t
 
y
e
a
r
s
R
a
n
g
e
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
c
u
r
r
e
n
t
Y
e
a
r
 
-
 
2
0
1
5
 
}
,
 
(
_
,
 
i
)
 
=
>
 
2
0
1
6
 
+
 
i
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
m
b
-
4
 
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
{
`
G
S
o
C
 
P
a
r
t
i
c
i
p
a
t
i
o
n
 
H
i
s
t
o
r
y
 
(
2
0
1
6
-
$
{
c
u
r
r
e
n
t
Y
e
a
r
}
)
`
}
>


 
 
 
 
 
 
{
y
e
a
r
s
R
a
n
g
e
.
m
a
p
(
(
y
e
a
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
t
i
c
i
p
a
t
e
d
 
=
 
p
a
r
t
i
c
i
p
a
t
e
d
Y
e
a
r
s
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
y
e
a
r
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
y
e
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
p
a
r
t
i
c
i
p
a
t
e
d
 
?
 
`
$
{
y
e
a
r
}
:
 
P
a
r
t
i
c
i
p
a
t
e
d
`
 
:
 
`
$
{
y
e
a
r
}
:
 
D
i
d
 
n
o
t
 
p
a
r
t
i
c
i
p
a
t
e
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
{
`
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
 
c
u
r
s
o
r
-
h
e
l
p
 
r
o
u
n
d
e
d
-
s
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
2
0
0
 
h
o
v
e
r
:
s
c
a
l
e
-
1
2
5
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
r
t
i
c
i
p
a
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
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
s
t
o
n
e
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
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




c
o
n
s
t
 
G
S
o
C
O
r
g
C
a
r
d
 
=
 
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
S
o
C
O
r
g
C
a
r
d
(
{


 
 
o
r
g
,


 
 
o
n
S
e
l
e
c
t
,


 
 
w
i
s
h
l
i
s
t
e
d
,


 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
,


}
:
 
{


 
 
o
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
;


 
 
o
n
S
e
l
e
c
t
:
 
(
o
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
)
 
=
>
 
v
o
i
d
;


 
 
w
i
s
h
l
i
s
t
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
;


 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
:
 
(
o
r
g
I
d
:
 
n
u
m
b
e
r
,
 
e
v
e
n
t
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
)
 
=
>
 
v
o
i
d
;


}
)
 
{


 
 
c
o
n
s
t
 
y
e
a
r
s
 
=
 
[
.
.
.
o
r
g
.
y
e
a
r
s
P
a
r
t
i
c
i
p
a
t
e
d
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
 
-
 
a
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
S
e
l
e
c
t
 
=
 
(
)
 
=
>
 
o
n
S
e
l
e
c
t
(
o
r
g
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
W
i
s
h
l
i
s
t
C
l
i
c
k
 
=
 
(
e
v
e
n
t
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
)
 
=
>
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
(
o
r
g
.
i
d
,
 
e
v
e
n
t
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


 
 
 
 
 
 
r
o
l
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
t
a
b
I
n
d
e
x
=
{
0
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
(
e
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
s
S
p
a
c
e
 
=
 
e
.
k
e
y
 
=
=
=
 
"
 
"
 
|
|
 
e
.
k
e
y
 
=
=
=
 
"
S
p
a
c
e
b
a
r
"
 
|
|
 
e
.
c
o
d
e
 
=
=
=
 
"
S
p
a
c
e
"
;


 
 
 
 
 
 
 
 
i
f
 
(
i
s
S
p
a
c
e
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
 
|
|
 
i
s
S
p
a
c
e
)
 
{


 
 
 
 
 
 
 
 
 
 
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
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
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
a
r
d
B
a
s
e
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
m
b
-
3
 
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
"
>


 
 
 
 
 
 
 
 
<
O
r
g
M
a
r
k
 
o
r
g
=
{
o
r
g
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
m
i
n
-
w
-
0
 
f
l
e
x
-
1
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
1
 
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
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
o
r
g
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
0
.
5
 
b
l
o
c
k
 
t
r
u
n
c
a
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
o
r
g
.
c
a
t
e
g
o
r
y
 
|
|
 
"
o
r
g
a
n
i
z
a
t
i
o
n
"
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
P
l
a
i
n
C
h
i
p
 
a
c
c
e
n
t
>
{
o
r
g
.
t
o
t
a
l
P
r
o
j
e
c
t
s
}
 
G
S
o
C
 
p
r
o
j
e
c
t
s
<
/
P
l
a
i
n
C
h
i
p
>


 
 
 
 
 
 
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
m
b
-
4
 
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
 
t
e
x
t
-
s
m
 
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
"
>


 
 
 
 
 
 
 
 
{
o
r
g
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
m
b
-
3
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
C
a
l
e
n
d
a
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
h
-
3
 
w
-
3
"
 
/
>
}
>


 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
s
[
0
]
 
?
?
 
"
n
e
w
"
}


 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
s
.
l
e
n
g
t
h
 
>
 
1
 
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
m
l
-
1
 
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
+
{
y
e
a
r
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
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
L
a
y
e
r
s
 
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
3
 
w
-
3
"
 
/
>
}
>


 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
|
|
 
0
}
 
t
e
c
h


 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
>
 
0
 
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
m
b
-
4
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
s
l
i
c
e
(
0
,
 
4
)
.
m
a
p
(
(
t
e
c
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
a
i
n
C
h
i
p
 
k
e
y
=
{
t
e
c
h
}
>
{
t
e
c
h
}
<
/
P
l
a
i
n
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
>
 
4
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
a
i
n
C
h
i
p
>
+
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
-
 
4
}
<
/
P
l
a
i
n
C
h
i
p
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
}




 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
W
i
s
h
l
i
s
t
C
l
i
c
k
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
b
-
3
 
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
w
i
s
h
l
i
s
t
e
d
 
?
 
"
R
e
m
o
v
e
 
f
r
o
m
 
w
i
s
h
l
i
s
t
"
 
:
 
"
A
d
d
 
t
o
 
w
i
s
h
l
i
s
t
"
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
H
e
a
r
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
{
`
h
-
4
 
w
-
4
 
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
w
i
s
h
l
i
s
t
e
d
 
?
 
"
f
i
l
l
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
l
i
m
e
-
4
0
0
"
}
`
}


 
 
 
 
 
 
 
 
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
{


 
 
 
 
 
 
 
 
 
 
 
 
w
i
s
h
l
i
s
t
e
d
 
?
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
w
i
s
h
l
i
s
t
e
d
 
?
 
"
w
i
s
h
l
i
s
t
e
d
"
 
:
 
"
w
i
s
h
l
i
s
t
"
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
b
u
t
t
o
n
>


 
 
 
 
 
 
<
P
a
r
t
i
c
i
p
a
t
i
o
n
B
a
r
 
p
a
r
t
i
c
i
p
a
t
e
d
Y
e
a
r
s
=
{
o
r
g
.
y
e
a
r
s
P
a
r
t
i
c
i
p
a
t
e
d
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
m
t
-
a
u
t
o
 
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
1
0
0
 
p
t
-
3
 
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
1
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
"
>


 
 
 
 
 
 
 
 
 
 
i
n
s
p
e
c
t
 
o
r
g


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
h
-
4
 
w
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
0
.
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


 
 
)
;


}
)
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
S
o
C
O
r
g
M
o
d
a
l
P
r
o
p
s
 
{


 
 
o
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
;


 
 
o
n
C
l
o
s
e
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


 
 
g
i
t
h
u
b
R
e
p
o
s
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
 
u
r
l
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
g
s
o
c
P
a
g
e
U
r
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


 
 
r
e
p
o
s
L
o
a
d
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
w
i
s
h
l
i
s
t
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
;


 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
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


}


f
u
n
c
t
i
o
n
 
G
S
o
C
O
r
g
M
o
d
a
l
(
{


 
 
o
r
g
,


 
 
o
n
C
l
o
s
e
,


 
 
g
i
t
h
u
b
R
e
p
o
s
,


 
 
g
s
o
c
P
a
g
e
U
r
l
,


 
 
r
e
p
o
s
L
o
a
d
i
n
g
,


 
 
w
i
s
h
l
i
s
t
e
d
,


 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
,


}
:
 
G
S
o
C
O
r
g
M
o
d
a
l
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
Y
e
a
r
,
 
s
e
t
S
e
l
e
c
t
e
d
Y
e
a
r
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
 
y
e
a
r
s
 
=
 
[
.
.
.
o
r
g
.
y
e
a
r
s
P
a
r
t
i
c
i
p
a
t
e
d
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
 
-
 
a
)
;


 
 
c
o
n
s
t
 
a
c
t
i
v
e
Y
e
a
r
 
=
 
s
e
l
e
c
t
e
d
Y
e
a
r
 
|
|
 
(
y
e
a
r
s
[
0
]
 
?
 
S
t
r
i
n
g
(
y
e
a
r
s
[
0
]
)
 
:
 
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
 
y
e
a
r
D
a
t
a
 
=


 
 
 
 
a
c
t
i
v
e
Y
e
a
r
 
&
&
 
o
r
g
.
p
r
o
j
e
c
t
s
D
a
t
a
 
?
 
o
r
g
.
p
r
o
j
e
c
t
s
D
a
t
a
[
a
c
t
i
v
e
Y
e
a
r
]
 
:
 
n
u
l
l
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


 
 
 
 
 
 
e
x
i
t
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
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
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
/
5
0
 
p
-
4
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
"


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
2
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
,
 
s
c
a
l
e
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
e
x
i
t
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
2
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
e
)
 
=
>
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
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
"
f
l
e
x
 
m
a
x
-
h
-
[
8
5
v
h
]
 
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
w
-
2
x
l
 
f
l
e
x
-
c
o
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
 
b
g
-
w
h
i
t
e
 
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
s
t
a
r
t
 
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
 
g
a
p
-
4
 
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
 
p
x
-
5
 
p
y
-
4
 
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
f
l
e
x
 
m
i
n
-
w
-
0
 
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
O
r
g
M
a
r
k
 
o
r
g
=
{
o
r
g
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
d
i
t
o
r
i
a
l
L
a
b
e
l
>
g
s
o
c
 
o
r
g
a
n
i
z
a
t
i
o
n
<
/
E
d
i
t
o
r
i
a
l
L
a
b
e
l
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
m
t
-
1
 
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
1
 
t
e
x
t
-
b
a
s
e
 
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
o
r
g
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
r
g
.
t
o
t
a
l
P
r
o
j
e
c
t
s
}
 
p
r
o
j
e
c
t
s
 
/
 
{
y
e
a
r
s
.
l
e
n
g
t
h
}
 
y
e
a
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
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
w
i
s
h
l
i
s
t
e
d
 
?
 
"
R
e
m
o
v
e
 
f
r
o
m
 
w
i
s
h
l
i
s
t
"
 
:
 
"
A
d
d
 
t
o
 
w
i
s
h
l
i
s
t
"
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
 
h
-
8
 
w
-
8
 
s
h
r
i
n
k
-
0
 
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
s
t
o
n
e
-
5
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
H
e
a
r
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
{
`
h
-
4
 
w
-
4
 
$
{
w
i
s
h
l
i
s
t
e
d
 
?
 
"
f
i
l
l
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
"
}
`
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
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
o
s
e
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
 
h
-
8
 
w
-
8
 
s
h
r
i
n
k
-
0
 
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
s
t
o
n
e
-
5
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
h
-
4
 
w
-
4
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
f
l
e
x
-
1
 
s
p
a
c
e
-
y
-
5
 
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
 
p
x
-
5
 
p
y
-
5
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


 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
G
l
o
b
e
 
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
3
 
w
-
3
"
 
/
>
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
T
r
o
p
h
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
h
-
3
 
w
-
3
"
 
/
>
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
o
t
a
l
P
r
o
j
e
c
t
s
}
 
p
r
o
j
e
c
t
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
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
m
b
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
e
r
s
 
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
c
h
n
o
l
o
g
i
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
e
c
h
n
o
l
o
g
i
e
s
.
m
a
p
(
(
t
e
c
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
a
i
n
C
h
i
p
 
k
e
y
=
{
t
e
c
h
}
>
{
t
e
c
h
}
<
/
P
l
a
i
n
C
h
i
p
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
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
o
p
i
c
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
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
m
b
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
a
g
 
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
t
o
p
i
c
s
.
m
a
p
(
(
t
o
p
i
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
o
p
i
c
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
 
p
x
-
2
 
p
y
-
0
.
5
 
t
e
x
t
-
[
1
1
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
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
{
t
o
p
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
p
r
o
j
e
c
t
s
D
a
t
a
 
&
&
 
y
e
a
r
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
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
m
b
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
a
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
j
e
c
t
s
 
b
y
 
y
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
s
.
m
a
p
(
(
y
e
a
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
S
t
r
i
n
g
(
y
e
a
r
)
 
=
=
=
 
a
c
t
i
v
e
Y
e
a
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
y
e
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
e
l
e
c
t
e
d
Y
e
a
r
(
S
t
r
i
n
g
(
y
e
a
r
)
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
o
r
d
e
r
 
p
x
-
2
.
5
 
p
y
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
 
$
{
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
s
t
o
n
e
-
6
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
}
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
p
r
o
j
e
c
t
s
D
a
t
a
?
.
[
S
t
r
i
n
g
(
y
e
a
r
)
]
?
.
n
u
m
_
p
r
o
j
e
c
t
s
 
|
|
 
0
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
D
a
t
a
?
.
p
r
o
j
e
c
t
s
 
&
&
 
y
e
a
r
D
a
t
a
.
p
r
o
j
e
c
t
s
.
l
e
n
g
t
h
 
>
 
0
 
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
m
a
x
-
h
-
5
2
 
s
p
a
c
e
-
y
-
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
D
a
t
a
.
p
r
o
j
e
c
t
s
.
m
a
p
(
(
p
r
o
j
e
c
t
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
p
r
o
j
e
c
t
.
t
i
t
l
e
}
-
$
{
i
n
d
e
x
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
 
p
-
3
 
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
s
t
a
r
t
 
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
 
g
a
p
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
5
 
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
p
r
o
j
e
c
t
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
5
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
0
.
5
 
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
 
t
e
x
t
-
[
1
1
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
r
 
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
U
s
e
r
s
 
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
s
t
u
d
e
n
t
_
n
a
m
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
c
o
d
e
_
u
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
p
r
o
j
e
c
t
.
c
o
d
e
_
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
V
i
e
w
 
p
r
o
j
e
c
t
 
c
o
d
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
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
h
-
4
 
w
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
r
o
j
e
c
t
.
s
h
o
r
t
_
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
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
 
t
e
x
t
-
x
s
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
s
h
o
r
t
_
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
e
c
t
i
o
n
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
c
o
n
t
a
c
t
E
m
a
i
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
`
m
a
i
l
t
o
:
$
{
o
r
g
.
c
o
n
t
a
c
t
E
m
a
i
l
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
 
p
x
-
2
.
5
 
p
y
-
1
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
m
a
i
l
i
n
g
L
i
s
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
o
r
g
.
m
a
i
l
i
n
g
L
i
s
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
 
p
x
-
2
.
5
 
p
y
-
1
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
a
i
l
i
n
g
 
L
i
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
i
d
e
a
s
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
o
r
g
.
i
d
e
a
s
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
 
p
x
-
2
.
5
 
p
y
-
1
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
g
h
t
b
u
l
b
 
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
o
j
e
c
t
 
I
d
e
a
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
r
g
.
g
u
i
d
e
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
o
r
g
.
g
u
i
d
e
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
 
p
x
-
2
.
5
 
p
y
-
1
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
O
p
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
r
i
b
u
t
o
r
 
G
u
i
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
r
e
p
o
s
L
o
a
d
i
n
g
 
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
.
5
 
w
-
1
.
5
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
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
i
n
d
i
n
g
 
g
i
t
h
u
b
 
r
e
p
o
s
.
.
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
!
r
e
p
o
s
L
o
a
d
i
n
g
 
&
&
 
g
i
t
h
u
b
R
e
p
o
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
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
m
b
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
i
t
h
u
b
 
r
e
p
o
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
i
t
h
u
b
R
e
p
o
s
.
m
a
p
(
(
r
e
p
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
e
p
o
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
e
p
o
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
 
g
a
p
-
3
 
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
 
p
x
-
3
 
p
y
-
2
 
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
3
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
1
 
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
[
1
1
p
x
]
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
u
r
l
.
r
e
p
l
a
c
e
(
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
"
,
 
"
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
E
x
t
e
r
n
a
l
L
i
n
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
"
h
-
3
.
5
 
w
-
3
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
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
s
e
c
t
i
o
n
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
g
r
i
d
 
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
1
0
0
 
p
t
-
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
o
r
g
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
9
0
0
 
p
x
-
4
 
p
y
-
3
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
e
b
s
i
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
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
"
h
-
4
 
w
-
4
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
g
s
o
c
P
a
g
e
U
r
l
 
?
?
 
"
h
t
t
p
s
:
/
/
s
u
m
m
e
r
o
f
c
o
d
e
.
w
i
t
h
g
o
o
g
l
e
.
c
o
m
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
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
l
i
m
e
-
4
0
0
 
p
x
-
4
 
p
y
-
3
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
S
o
C
 
P
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
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
"
h
-
4
 
w
-
4
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
 
G
S
o
C
R
e
p
o
s
P
a
g
e
(
)
 
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
(
(
)
 
=
>
 
{


 
 
 
 
m
a
r
k
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
(
"
g
s
o
c
-
o
r
g
s
"
)
;


 
 
}
,
 
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
s
e
a
r
c
h
P
a
r
a
m
s
,
 
s
e
t
S
e
a
r
c
h
P
a
r
a
m
s
]
 
=
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
(
)
;




 
 
/
/
 
1
.
 
I
n
i
t
i
a
l
i
z
e
 
s
t
a
t
e
 
s
t
r
i
c
t
l
y
 
f
r
o
m
 
U
R
L
 
p
a
r
a
m
s


 
 
c
o
n
s
t
 
i
n
i
t
i
a
l
Q
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
q
"
)
 
|
|
 
"
"
;


 
 
c
o
n
s
t
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
c
a
t
e
g
o
r
y
"
)
 
|
|
 
"
A
l
l
"
;


 
 
c
o
n
s
t
 
s
e
l
e
c
t
e
d
T
e
c
h
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
t
e
c
h
"
)
 
|
|
 
"
A
l
l
"
;


 
 
c
o
n
s
t
 
s
e
l
e
c
t
e
d
Y
e
a
r
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
y
e
a
r
"
)
 
|
|
 
"
A
l
l
"
;




 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
i
n
i
t
i
a
l
Q
)
;




 
 
/
/
 
F
I
X
 
1
:
 
D
e
p
e
n
d
 
O
N
L
Y
 
o
n
 
i
n
i
t
i
a
l
Q
,
 
n
o
t
 
s
e
a
r
c
h
P
a
r
a
m
s
.
 


 
 
/
/
 
T
h
i
s
 
p
r
e
v
e
n
t
s
 
w
i
p
i
n
g
 
o
u
t
 
h
a
l
f
-
t
y
p
e
d
 
t
e
x
t
 
w
h
e
n
 
o
t
h
e
r
 
f
i
l
t
e
r
s
 
c
h
a
n
g
e
.


 
 
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


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
S
e
a
r
c
h
(
i
n
i
t
i
a
l
Q
)
;


 
 
}
,
 
[
i
n
i
t
i
a
l
Q
]
)
;




 
 
c
o
n
s
t
 
[
p
a
g
e
,
 
s
e
t
P
a
g
e
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
1
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
O
r
g
,
 
s
e
t
S
e
l
e
c
t
e
d
O
r
g
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
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
 
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
 
{
 
w
i
s
h
l
i
s
t
,
 
t
o
g
g
l
e
,
 
h
a
s
 
}
 
=
 
u
s
e
W
i
s
h
l
i
s
t
(
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
W
i
s
h
l
i
s
t
,
 
s
e
t
S
h
o
w
W
i
s
h
l
i
s
t
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




 
 


 
 
/
/
 
-
-
-
>
 
C
H
A
N
G
E
D
 
T
O
 
u
s
e
R
e
f
 
T
O
 
F
I
X
 
S
T
A
L
E
 
C
L
O
S
U
R
E
S
 
<
-
-
-


 
 
c
o
n
s
t
 
t
i
m
e
r
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
 
l
i
m
i
t
 
=
 
1
8
;




 
 
/
/
 
C
l
e
a
n
u
p
 
t
i
m
e
r
 
o
n
 
u
n
m
o
u
n
t


 
 
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
t
i
m
e
r
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
 
{


 
 
 
 
 
 
 
 
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
i
m
e
r
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


 
 
 
 
 
 
 
 
t
i
m
e
r
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
 
n
u
l
l
;


 
 
 
 
 
 
}


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
c
l
e
a
r
P
e
n
d
i
n
g
S
e
a
r
c
h
T
i
m
e
r
 
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
i
m
e
r
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
 
{


 
 
 
 
 
 
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
i
m
e
r
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


 
 
 
 
 
 
t
i
m
e
r
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
 
n
u
l
l
;


 
 
 
 
}


 
 
}
,
 
[
]
)
;




 
 
/
/
 
F
I
X
 
2
:
 
F
u
n
c
t
i
o
n
a
l
 
u
p
d
a
t
e
r
.


 
 
/
/
 
T
h
i
s
 
e
n
s
u
r
e
s
 
t
h
a
t
 
d
e
l
a
y
e
d
 
d
e
b
o
u
n
c
e
d
 
c
a
l
l
s
 
a
l
w
a
y
s
 
u
s
e
 
t
h
e
 
f
r
e
s
h
e
s
t
 
U
R
L
 
s
t
a
t
e
.


 
 
c
o
n
s
t
 
u
p
d
a
t
e
F
i
l
t
e
r
 
=
 
(
k
e
y
:
 
s
t
r
i
n
g
,
 
v
a
l
u
e
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
k
e
y
 
=
=
=
 
"
q
"
)
 
{


 
 
 
 
 
 
c
l
e
a
r
P
e
n
d
i
n
g
S
e
a
r
c
h
T
i
m
e
r
(
)
;


 
 
 
 
}


 
 
 
 
s
e
t
S
e
a
r
c
h
P
a
r
a
m
s
(


 
 
 
 
 
 
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
P
a
r
a
m
s
 
=
 
n
e
w
 
U
R
L
S
e
a
r
c
h
P
a
r
a
m
s
(
p
r
e
v
)
;


 
 
 
 
 
 
 
 
i
f
 
(
v
a
l
u
e
 
&
&
 
v
a
l
u
e
 
!
=
=
 
"
A
l
l
"
)
 
{


 
 
 
 
 
 
 
 
 
 
n
e
w
P
a
r
a
m
s
.
s
e
t
(
k
e
y
,
 
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
n
e
w
P
a
r
a
m
s
.
d
e
l
e
t
e
(
k
e
y
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
w
P
a
r
a
m
s
;


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{
 
r
e
p
l
a
c
e
:
 
t
r
u
e
 
}


 
 
 
 
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
}
;




 
 
/
/
 
-
-
-
>
 
U
P
D
A
T
E
D
 
T
O
 
U
S
E
 
t
i
m
e
r
R
e
f
 
<
-
-
-


 
 
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
a
r
c
h
 
=
 
(
v
a
l
u
e
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


 
 
 
 
s
e
t
S
e
a
r
c
h
(
v
a
l
u
e
)
;


 
 
 
 
c
l
e
a
r
P
e
n
d
i
n
g
S
e
a
r
c
h
T
i
m
e
r
(
)
;


 
 
 
 


 
 
 
 
t
i
m
e
r
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
 
{


 
 
 
 
 
 
u
p
d
a
t
e
F
i
l
t
e
r
(
"
q
"
,
 
v
a
l
u
e
)
;


 
 
 
 
}
,
 
4
0
0
)
;


 
 
}
;




 
 
c
o
n
s
t
 
c
l
e
a
r
F
i
l
t
e
r
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
c
l
e
a
r
P
e
n
d
i
n
g
S
e
a
r
c
h
T
i
m
e
r
(
)
;


 
 
 
 
s
e
t
S
e
a
r
c
h
(
"
"
)
;


 
 
 
 
s
e
t
S
e
a
r
c
h
P
a
r
a
m
s
(
{
}
,
 
{
 
r
e
p
l
a
c
e
:
 
t
r
u
e
 
}
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
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
O
r
g
C
l
i
c
k
 
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
o
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
O
r
g
(
o
r
g
)
;


 
 
}
,
 
[
s
e
t
S
e
l
e
c
t
e
d
O
r
g
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
W
i
s
h
l
i
s
t
T
o
g
g
l
e
 
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
o
r
g
I
d
:
 
n
u
m
b
e
r
,
 
e
v
e
n
t
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
v
e
n
t
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
t
o
g
g
l
e
(
o
r
g
I
d
)
;


 
 
 
 
}
,


 
 
 
 
[
t
o
g
g
l
e
]


 
 
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
s
t
a
t
s
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
G
S
o
C
S
t
a
t
s
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
g
s
o
c
.
s
t
a
t
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
g
s
o
c
/
s
t
a
t
s
"
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
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


 
 
}
)
;




 
 
/
/
 
3
.
 
P
a
s
s
 
c
u
r
r
e
n
t
 
U
R
L
 
s
t
a
t
e
 
d
i
r
e
c
t
l
y
 
t
o
 
t
h
e
 
A
P
I
 
q
u
e
r
y


 
 
c
o
n
s
t
 
p
a
r
a
m
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
>
 
=
 
{
 
p
a
g
e
,
 
l
i
m
i
t
 
}
;


 
 
i
f
 
(
i
n
i
t
i
a
l
Q
)
 
p
a
r
a
m
s
.
s
e
a
r
c
h
 
=
 
i
n
i
t
i
a
l
Q
;


 
 
i
f
 
(
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
l
l
"
)
 
p
a
r
a
m
s
.
c
a
t
e
g
o
r
y
 
=
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
;


 
 
i
f
 
(
s
e
l
e
c
t
e
d
T
e
c
h
 
!
=
=
 
"
A
l
l
"
)
 
p
a
r
a
m
s
.
t
e
c
h
n
o
l
o
g
y
 
=
 
s
e
l
e
c
t
e
d
T
e
c
h
;


 
 
i
f
 
(
s
e
l
e
c
t
e
d
Y
e
a
r
 
!
=
=
 
"
A
l
l
"
)
 
p
a
r
a
m
s
.
y
e
a
r
 
=
 
p
a
r
s
e
I
n
t
(
s
e
l
e
c
t
e
d
Y
e
a
r
,
 
1
0
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
g
s
o
c
.
l
i
s
t
(
p
a
r
a
m
s
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
 
 
a
p
i
.
g
e
t
(
"
/
g
s
o
c
/
o
r
g
a
n
i
z
a
t
i
o
n
s
"
,
 
{
 
p
a
r
a
m
s
 
}
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
}
)
;




 
 
c
o
n
s
t
 
o
r
g
a
n
i
z
a
t
i
o
n
s
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
[
]
 
=
 
d
a
t
a
?
.
o
r
g
a
n
i
z
a
t
i
o
n
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
O
r
g
a
n
i
z
a
t
i
o
n
s
 
=
 
s
h
o
w
W
i
s
h
l
i
s
t


 
 
 
 
?
 
o
r
g
a
n
i
z
a
t
i
o
n
s
.
f
i
l
t
e
r
(
(
o
r
g
)
 
=
>
 
h
a
s
(
o
r
g
.
i
d
)
)


 
 
 
 
:
 
o
r
g
a
n
i
z
a
t
i
o
n
s
;


 
 
c
o
n
s
t
 
p
a
g
i
n
a
t
i
o
n
 
=
 
d
a
t
a
?
.
p
a
g
i
n
a
t
i
o
n
 
?
?
 
{
 
p
a
g
e
:
 
1
,
 
t
o
t
a
l
:
 
0
,
 
t
o
t
a
l
P
a
g
e
s
:
 
1
 
}
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
d
e
t
a
i
l
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
g
s
o
c
.
d
e
t
a
i
l
(
s
e
l
e
c
t
e
d
O
r
g
?
.
s
l
u
g
 
?
?
 
"
"
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
 
 
a
p
i


 
 
 
 
 
 
 
 
.
g
e
t
(
`
/
g
s
o
c
/
o
r
g
a
n
i
z
a
t
i
o
n
s
/
$
{
s
e
l
e
c
t
e
d
O
r
g
!
.
s
l
u
g
}
`
)


 
 
 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
e
l
e
c
t
e
d
O
r
g
,


 
 
}
)
;




 
 
c
o
n
s
t
 
d
e
t
a
i
l
O
r
g
:
 
G
S
o
C
O
r
g
a
n
i
z
a
t
i
o
n
 
|
 
n
u
l
l
 
=


 
 
 
 
d
e
t
a
i
l
D
a
t
a
?
.
o
r
g
a
n
i
z
a
t
i
o
n
 
?
?
 
s
e
l
e
c
t
e
d
O
r
g
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
r
e
p
o
s
D
a
t
a
,
 
i
s
L
o
a
d
i
n
g
:
 
r
e
p
o
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
g
s
o
c
.
r
e
p
o
s
(
s
e
l
e
c
t
e
d
O
r
g
?
.
s
l
u
g
 
?
?
 
"
"
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
 
 
a
p
i


 
 
 
 
 
 
 
 
.
g
e
t
(
`
/
g
s
o
c
/
o
r
g
a
n
i
z
a
t
i
o
n
s
/
$
{
s
e
l
e
c
t
e
d
O
r
g
!
.
s
l
u
g
}
/
r
e
p
o
s
`
)


 
 
 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
e
l
e
c
t
e
d
O
r
g
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
0
0
0
 
*
 
6
0
 
*
 
6
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
g
i
t
h
u
b
R
e
p
o
s
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
 
u
r
l
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
r
e
p
o
s
D
a
t
a
?
.
g
i
t
h
u
b
R
e
p
o
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
g
s
o
c
P
a
g
e
U
r
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
 
=
 
r
e
p
o
s
D
a
t
a
?
.
g
s
o
c
P
a
g
e
U
r
l
 
?
?
 
n
u
l
l
;


 
 
c
o
n
s
t
 
c
a
t
e
g
o
r
y
O
p
t
i
o
n
s
 
=
 
[


 
 
 
 
"
A
l
l
"
,


 
 
 
 
.
.
.
(
s
t
a
t
s
?
.
c
a
t
e
g
o
r
i
e
s
.
m
a
p
(
(
c
a
t
e
g
o
r
y
)
 
=
>
 
c
a
t
e
g
o
r
y
.
n
a
m
e
)
 
?
?
 
[
]
)
,


 
 
]
;


 
 
c
o
n
s
t
 
y
e
a
r
O
p
t
i
o
n
s
 
=
 
[


 
 
 
 
"
A
l
l
"
,


 
 
 
 
.
.
.
(
s
t
a
t
s
?
.
y
e
a
r
s
.
m
a
p
(
(
y
e
a
r
)
 
=
>
 
S
t
r
i
n
g
(
y
e
a
r
.
y
e
a
r
)
)
 
?
?
 
[
]
)
,


 
 
]
;


 
 
c
o
n
s
t
 
t
e
c
h
O
p
t
i
o
n
s
 
=
 
[


 
 
 
 
"
A
l
l
"
,


 
 
 
 
.
.
.
(
s
t
a
t
s
?
.
t
e
c
h
n
o
l
o
g
i
e
s
.
s
l
i
c
e
(
0
,
 
3
0
)
.
m
a
p
(
(
t
e
c
h
)
 
=
>
 
t
e
c
h
.
n
a
m
e
)
 
?
?
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
h
a
s
F
i
l
t
e
r
s
 
=


 
 
 
 
B
o
o
l
e
a
n
(
i
n
i
t
i
a
l
Q
)
 
|
|
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
l
l
"
 
|
|
 
s
e
l
e
c
t
e
d
T
e
c
h
 
!
=
=
 
"
A
l
l
"
 
|
|
 
s
e
l
e
c
t
e
d
Y
e
a
r
 
!
=
=
 
"
A
l
l
"
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
m
i
n
-
h
-
s
c
r
e
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
G
S
o
C
 
O
r
g
a
n
i
z
a
t
i
o
n
s
,
 
E
x
p
l
o
r
e
 
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
 
O
r
g
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
B
r
o
w
s
e
 
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
 
o
r
g
a
n
i
z
a
t
i
o
n
s
,
 
p
a
s
t
 
p
r
o
j
e
c
t
s
,
 
t
e
c
h
n
o
l
o
g
i
e
s
,
 
t
o
p
i
c
s
,
 
a
n
d
 
c
o
n
t
r
i
b
u
t
o
r
 
l
i
n
k
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
G
S
o
C
,
 
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
,
 
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
 
o
r
g
a
n
i
z
a
t
i
o
n
s
,
 
s
t
u
d
e
n
t
 
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
)
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
"
/
o
g
/
o
g
-
g
s
o
c
.
p
n
g
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
m
x
-
a
u
t
o
 
m
a
x
-
w
-
6
x
l
 
p
x
-
4
 
p
y
-
8
 
s
m
:
p
x
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
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
<
E
d
i
t
o
r
i
a
l
L
a
b
e
l
>
l
e
a
r
n
i
n
g
 
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
<
/
E
d
i
t
o
r
i
a
l
L
a
b
e
l
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
2
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
 
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
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
.
5
 
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
 
s
m
:
t
e
x
t
-
3
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
p
l
o
r
e
 
G
S
o
C
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
"
>
o
r
g
a
n
i
z
a
t
i
o
n
s
.
<
/
s
p
a
n
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
4
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
0
.
5
 
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
 
z
-
0
 
h
-
2
.
5
 
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
 
s
m
:
h
-
3
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
h
1
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
a
x
-
w
-
2
x
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
a
r
c
h
 
a
c
c
e
p
t
e
d
 
o
r
g
a
n
i
z
a
t
i
o
n
s
,
 
s
t
u
d
y
 
t
h
e
i
r
 
p
a
s
t
 
p
r
o
j
e
c
t
s
,
 
a
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
n
d
 
a
 
c
o
m
m
u
n
i
t
y
 
w
h
e
r
e
 
y
o
u
r
 
s
t
a
c
k
 
f
i
t
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
r
a
p
 
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
4
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
s
t
a
t
s
?
.
t
o
t
a
l
 
?
?
 
"
-
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
r
g
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
1
 
w
-
1
 
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
s
t
o
n
e
-
7
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
s
t
a
t
s
?
.
c
a
t
e
g
o
r
i
e
s
.
l
e
n
g
t
h
 
?
?
 
"
-
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
i
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
s
t
o
n
e
-
7
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
2
0
1
6
-
{
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
}
<
/
s
p
a
n
>
 
y
e
a
r
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
b
-
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
 
g
a
p
-
2
 
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
 
f
l
e
x
-
1
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
t
o
p
-
1
/
2
 
h
-
4
 
w
-
4
 
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
/
2
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
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
v
e
n
t
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
a
r
c
h
(
e
v
e
n
t
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
 
o
r
g
a
n
i
z
a
t
i
o
n
s
,
 
t
e
c
h
n
o
l
o
g
i
e
s
,
 
t
o
p
i
c
s
.
.
.
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
w
-
f
u
l
l
 
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
 
b
g
-
w
h
i
t
e
 
p
y
-
3
 
p
l
-
1
1
 
p
r
-
4
 
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
 
f
o
c
u
s
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
 
f
o
c
u
s
:
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
 
d
a
r
k
:
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


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
t
e
r
D
r
o
p
d
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
G
l
o
b
e
 
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
3
.
5
 
w
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
c
a
t
e
g
o
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
c
a
t
e
g
o
r
y
O
p
t
i
o
n
s
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
v
a
l
u
e
)
 
=
>
 
u
p
d
a
t
e
F
i
l
t
e
r
(
"
c
a
t
e
g
o
r
y
"
,
 
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
t
e
r
D
r
o
p
d
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
a
l
e
n
d
a
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
h
-
3
.
5
 
w
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
y
e
a
r
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
l
e
c
t
e
d
Y
e
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
y
e
a
r
O
p
t
i
o
n
s
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
v
a
l
u
e
)
 
=
>
 
u
p
d
a
t
e
F
i
l
t
e
r
(
"
y
e
a
r
"
,
 
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
t
e
r
D
r
o
p
d
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
o
d
e
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
h
-
3
.
5
 
w
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
t
e
c
h
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
l
e
c
t
e
d
T
e
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
t
e
c
h
O
p
t
i
o
n
s
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
v
a
l
u
e
)
 
=
>
 
u
p
d
a
t
e
F
i
l
t
e
r
(
"
t
e
c
h
"
,
 
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
h
a
s
F
i
l
t
e
r
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
c
l
e
a
r
F
i
l
t
e
r
s
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
1
 
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
o
r
d
e
r
-
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
 
p
x
-
3
 
p
y
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
r
e
d
-
5
0
0
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
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
S
h
o
w
W
i
s
h
l
i
s
t
(
(
p
r
e
v
)
 
=
>
 
!
p
r
e
v
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
o
r
d
e
r
 
p
x
-
3
 
p
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
w
W
i
s
h
l
i
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
s
t
o
n
e
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
H
e
a
r
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
{
`
h
-
3
.
5
 
w
-
3
.
5
 
$
{
s
h
o
w
W
i
s
h
l
i
s
t
 
?
 
"
f
i
l
l
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
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
W
i
s
h
l
i
s
t
 
{
w
i
s
h
l
i
s
t
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
`
(
$
{
w
i
s
h
l
i
s
t
.
l
e
n
g
t
h
}
)
`
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
b
-
4
 
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
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
o
r
g
a
n
i
z
a
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
s
F
i
l
t
e
r
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
t
e
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
 
>
 
1
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
p
a
g
e
 
{
p
a
g
i
n
a
t
i
o
n
.
p
a
g
e
}
 
o
f
 
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
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




 
 
 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
c
o
m
p
a
c
t
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
o
r
g
a
n
i
z
a
t
i
o
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
E
m
p
t
y
S
t
a
t
e
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
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


 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
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
 
g
a
p
-
4
 
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
3
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
p
o
p
L
a
y
o
u
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
O
r
g
a
n
i
z
a
t
i
o
n
s
.
m
a
p
(
(
o
r
g
,
 
i
n
d
e
x
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
o
r
g
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
s
c
a
l
e
:
 
0
.
9
5
 
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
n
d
e
x
 
*
 
0
.
0
2
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
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
S
o
C
O
r
g
C
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
r
g
=
{
o
r
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
S
e
l
e
c
t
=
{
h
a
n
d
l
e
O
r
g
C
l
i
c
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
s
h
l
i
s
t
e
d
=
{
h
a
s
(
o
r
g
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
=
{
h
a
n
d
l
e
W
i
s
h
l
i
s
t
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
}




 
 
 
 
 
 
 
 
<
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s


 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
P
a
g
e
=
{
p
a
g
e
}


 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
P
a
g
e
s
=
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
o
n
P
a
g
e
C
h
a
n
g
e
=
{
s
e
t
P
a
g
e
}


 
 
 
 
 
 
 
 
 
 
s
h
o
w
i
n
g
I
n
f
o
=
{
{
 
t
o
t
a
l
:
 
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
,
 
l
i
m
i
t
 
}
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


 
 
 
 
 
 
 
 
{
d
e
t
a
i
l
O
r
g
 
&
&
 
s
e
l
e
c
t
e
d
O
r
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
G
S
o
C
O
r
g
M
o
d
a
l


 
 
 
 
 
 
 
 
 
 
 
 
o
r
g
=
{
d
e
t
a
i
l
O
r
g
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
=
{
(
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
O
r
g
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
 
 
g
i
t
h
u
b
R
e
p
o
s
=
{
g
i
t
h
u
b
R
e
p
o
s
}


 
 
 
 
 
 
 
 
 
 
 
 
g
s
o
c
P
a
g
e
U
r
l
=
{
g
s
o
c
P
a
g
e
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
p
o
s
L
o
a
d
i
n
g
=
{
r
e
p
o
s
L
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
w
i
s
h
l
i
s
t
e
d
=
{
h
a
s
(
d
e
t
a
i
l
O
r
g
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
W
i
s
h
l
i
s
t
T
o
g
g
l
e
=
{
(
)
 
=
>
 
t
o
g
g
l
e
(
d
e
t
a
i
l
O
r
g
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
;


}



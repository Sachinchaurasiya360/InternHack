
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
 
{
 
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
,
 
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
l
o
b
e
,
 
P
o
w
e
r
,
 
R
o
t
a
t
e
C
c
w
 
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;




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


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
k
:
 
"
1
.
 
S
I
G
T
E
R
M
 
r
e
c
e
i
v
e
d
"
,
 
v
:
 
"
O
r
c
h
e
s
t
r
a
t
o
r
 
(
K
u
b
e
r
n
e
t
e
s
,
 
E
C
S
,
 
s
y
s
t
e
m
d
)
 
s
e
n
d
s
 
S
I
G
T
E
R
M
.
 
T
h
e
 
p
o
d
 
i
s
 
b
e
i
n
g
 
a
s
k
e
d
 
t
o
 
e
x
i
t
.
"
 
}
,


 
 
{
 
k
:
 
"
2
.
 
M
a
r
k
 
u
n
h
e
a
l
t
h
y
"
,
 
v
:
 
"
P
o
d
 
f
a
i
l
s
 
i
t
s
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
.
 
L
o
a
d
 
b
a
l
a
n
c
e
r
 
s
t
o
p
s
 
s
e
n
d
i
n
g
 
n
e
w
 
t
r
a
f
f
i
c
 
a
l
m
o
s
t
 
i
m
m
e
d
i
a
t
e
l
y
.
"
 
}
,


 
 
{
 
k
:
 
"
3
.
 
D
r
a
i
n
 
i
n
-
f
l
i
g
h
t
"
,
 
v
:
 
"
E
x
i
s
t
i
n
g
 
r
e
q
u
e
s
t
s
 
k
e
e
p
 
r
u
n
n
i
n
g
 
u
n
t
i
l
 
t
h
e
y
 
f
i
n
i
s
h
,
 
n
o
r
m
a
l
l
y
 
u
p
 
t
o
 
3
0
 
s
e
c
o
n
d
s
.
"
 
}
,


 
 
{
 
k
:
 
"
4
.
 
C
l
o
s
e
 
c
o
n
n
e
c
t
i
o
n
s
"
,
 
v
:
 
"
A
f
t
e
r
 
d
r
a
i
n
,
 
g
r
a
c
e
f
u
l
l
y
 
c
l
o
s
e
 
k
e
e
p
a
l
i
v
e
 
c
o
n
n
e
c
t
i
o
n
s
,
 
f
l
u
s
h
 
l
o
g
s
,
 
c
o
m
m
i
t
 
o
f
f
s
e
t
s
,
 
c
l
o
s
e
 
D
B
 
p
o
o
l
s
.
"
 
}
,


 
 
{
 
k
:
 
"
5
.
 
E
x
i
t
 
c
l
e
a
n
l
y
"
,
 
v
:
 
"
P
r
o
c
e
s
s
 
e
x
i
t
s
.
 
I
f
 
n
o
t
 
d
o
n
e
 
b
e
f
o
r
e
 
g
r
a
c
e
-
p
e
r
i
o
d
 
(
d
e
f
a
u
l
t
 
3
0
s
 
i
n
 
K
8
s
)
,
 
S
I
G
K
I
L
L
 
h
i
t
s
 
a
n
d
 
i
n
-
f
l
i
g
h
t
 
w
o
r
k
 
i
s
 
d
r
o
p
p
e
d
.
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
D
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
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
}
>
D
o
n
&
r
s
q
u
o
;
t
 
h
a
n
g
 
u
p
 
o
n
 
r
e
q
u
e
s
t
s
 
m
i
d
-
f
l
i
g
h
t
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
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
}
>


 
 
 
 
 
 
 
 
E
v
e
r
y
 
d
e
p
l
o
y
 
o
r
 
a
u
t
o
s
c
a
l
e
 
e
v
e
n
t
 
t
a
k
e
s
 
p
o
d
s
 
o
u
t
 
o
f
 
s
e
r
v
i
c
e
.
 
D
o
n
e
 
b
a
d
l
y
,
 
t
h
a
t
 
d
r
o
p
s
 
i
n
-
f
l
i
g
h
t


 
 
 
 
 
 
 
 
r
e
q
u
e
s
t
s
 
o
n
 
t
h
e
 
f
l
o
o
r
 
—
 
u
s
e
r
s
 
s
e
e
 
5
0
2
s
,
 
p
a
y
m
e
n
t
s
 
f
a
i
l
 
m
i
d
-
w
r
i
t
e
,
 
q
u
e
u
e
s
 
l
o
s
e
 
m
e
s
s
a
g
e
s
.


 
 
 
 
 
 
 
 
D
o
n
e
 
w
e
l
l
,
 
t
h
e
 
p
o
d
 
c
o
o
p
e
r
a
t
e
s
:
 
i
t
 
g
o
e
s
 
u
n
h
e
a
l
t
h
y
,
 
d
r
a
i
n
s
 
e
x
i
s
t
i
n
g
 
w
o
r
k
,
 
t
h
e
n
 
e
x
i
t
s
.


 
 
 
 
 
 
<
/
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
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
 
v
i
s
i
b
l
e
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
7
 
}
 
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
2
 
g
a
p
-
3
 
m
b
-
6
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
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
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
 
8
 
}
,
 
v
i
s
i
b
l
e
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
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
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
k
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
 
s
t
y
l
e
=
{
{
 
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
8
4
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
5
5
 
}
}
>
{
s
.
v
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


 
 
 
 
 
 
 
 
)
)
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
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
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
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
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
8
6
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
K
u
b
e
r
n
e
t
e
s
<
/
b
>
 
s
e
n
d
s
 
S
I
G
T
E
R
M
,
 
w
a
i
t
s
 
<
c
o
d
e
 
s
t
y
l
e
=
{
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
 
M
O
N
O
 
}
}
>
t
e
r
m
i
n
a
t
i
o
n
G
r
a
c
e
P
e
r
i
o
d
S
e
c
o
n
d
s
<
/
c
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
(
3
0
s
 
d
e
f
a
u
l
t
)
,
 
t
h
e
n
 
S
I
G
K
I
L
L
s
.
 
U
s
e
 
a
 
<
b
>
p
r
e
S
t
o
p
<
/
b
>
 
h
o
o
k
 
t
o
 
d
e
l
a
y
 
b
e
f
o
r
e
 
m
a
r
k
-
u
n
h
e
a
l
t
h
y


 
 
 
 
 
 
 
 
 
 
s
o
 
t
h
e
 
L
B
 
h
a
s
 
t
i
m
e
 
t
o
 
u
p
d
a
t
e
.
 
<
b
>
E
n
v
o
y
 
/
 
I
s
t
i
o
<
/
b
>
 
s
u
p
p
o
r
t


 
 
 
 
 
 
 
 
 
 
<
c
o
d
e
 
s
t
y
l
e
=
{
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
 
M
O
N
O
 
}
}
>
 
/
h
e
a
l
t
h
c
h
e
c
k
/
f
a
i
l
<
/
c
o
d
e
>
 
t
o
 
f
l
i
p
 
a
 
s
i
d
e
c
a
r
 
u
n
h
e
a
l
t
h
y


 
 
 
 
 
 
 
 
 
 
b
e
f
o
r
e
 
t
h
e
 
a
p
p
 
e
x
i
t
s
.
 
<
b
>
n
g
i
n
x
<
/
b
>
 
h
a
s
 
<
c
o
d
e
 
s
t
y
l
e
=
{
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
 
M
O
N
O
 
}
}
>
n
g
i
n
x
 
-
s
 
q
u
i
t
<
/
c
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
f
o
r
 
g
r
a
c
e
f
u
l
 
s
h
u
t
d
o
w
n
.


 
 
 
 
 
 
 
 
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
A
n
i
m
a
t
e
d
 
r
o
l
l
i
n
g
 
d
e
p
l
o
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
P
o
d
P
h
a
s
e
 
=
 
"
r
e
a
d
y
"
 
|
 
"
d
r
a
i
n
i
n
g
"
 
|
 
"
d
o
w
n
"
 
|
 
"
s
t
a
r
t
i
n
g
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
o
d
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
p
h
a
s
e
:
 
P
o
d
P
h
a
s
e
;


 
 
i
n
F
l
i
g
h
t
:
 
n
u
m
b
e
r
;


 
 
d
r
a
i
n
E
l
a
p
s
e
d
:
 
n
u
m
b
e
r
;
 
/
/
 
m
s


}




c
o
n
s
t
 
P
O
D
_
C
O
U
N
T
 
=
 
4
;


c
o
n
s
t
 
N
E
W
_
R
E
Q
_
P
E
R
_
T
I
C
K
 
=
 
0
.
6
;
 
/
/
 
p
r
o
b
a
b
i
l
i
t
y
 
o
f
 
a
 
n
e
w
 
r
e
q
u
e
s
t
 
l
a
n
d
i
n
g
 
o
n
 
a
 
p
o
d
 
p
e
r
 
t
i
c
k


c
o
n
s
t
 
T
I
C
K
_
M
S
 
=
 
2
0
0
;


c
o
n
s
t
 
D
R
A
I
N
_
M
S
 
=
 
4
0
0
0
;
 
/
/
 
s
i
m
u
l
a
t
e
d
 
d
r
a
i
n
 
t
i
m
e


c
o
n
s
t
 
R
E
Q
_
D
U
R
A
T
I
O
N
_
M
S
 
=
 
1
8
0
0
;
 
/
/
 
s
i
m
u
l
a
t
e
d
 
i
n
-
f
l
i
g
h
t
 
r
e
q
u
e
s
t
 
d
u
r
a
t
i
o
n




f
u
n
c
t
i
o
n
 
G
r
a
c
e
f
u
l
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
p
o
d
s
,
 
s
e
t
P
o
d
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
P
o
d
[
]
>
(
(
)
 
=
>


 
 
 
 
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
 
P
O
D
_
C
O
U
N
T
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
{
 
i
d
:
 
i
,
 
p
h
a
s
e
:
 
"
r
e
a
d
y
"
,
 
i
n
F
l
i
g
h
t
:
 
0
,
 
d
r
a
i
n
E
l
a
p
s
e
d
:
 
0
 
}
)
)
,


 
 
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
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
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
s
t
r
a
t
e
g
y
,
 
s
e
t
S
t
r
a
t
e
g
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
<
"
g
r
a
c
e
f
u
l
"
 
|
 
"
a
b
r
u
p
t
"
>
(
"
g
r
a
c
e
f
u
l
"
)
;


 
 
c
o
n
s
t
 
[
s
t
a
t
s
,
 
s
e
t
S
t
a
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
(
{
 
o
k
:
 
0
,
 
l
o
s
t
:
 
0
 
}
)
;


 
 
c
o
n
s
t
 
[
d
e
p
l
o
y
i
n
g
,
 
s
e
t
D
e
p
l
o
y
i
n
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
 
d
e
p
l
o
y
I
d
x
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
(
0
)
;




 
 
/
/
 
S
i
m
u
l
a
t
i
o
n
 
t
i
c
k


 
 
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
!
r
u
n
n
i
n
g
)
 
r
e
t
u
r
n
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
 
{


 
 
 
 
 
 
s
e
t
P
o
d
s
(
(
p
s
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
 
p
s
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
l
e
t
 
{
 
p
h
a
s
e
,
 
i
n
F
l
i
g
h
t
,
 
d
r
a
i
n
E
l
a
p
s
e
d
 
}
 
=
 
p
;


 
 
 
 
 
 
 
 
 
 
/
/
 
D
i
s
t
r
i
b
u
t
e
 
n
e
w
 
r
e
q
u
e
s
t
s
 
t
o
 
r
e
a
d
y
 
p
o
d
s


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
r
e
a
d
y
"
 
&
&
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
<
 
N
E
W
_
R
E
Q
_
P
E
R
_
T
I
C
K
 
/
 
P
O
D
_
C
O
U
N
T
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
n
F
l
i
g
h
t
 
=
 
M
a
t
h
.
m
i
n
(
8
,
 
i
n
F
l
i
g
h
t
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
/
/
 
C
o
m
p
l
e
t
e
 
i
n
-
f
l
i
g
h
t
 
a
t
 
a
 
s
t
e
a
d
y
 
r
a
t
e
 
(
~
1
.
8
s
 
a
v
g
)


 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
n
F
l
i
g
h
t
 
>
 
0
 
&
&
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
<
 
T
I
C
K
_
M
S
 
/
 
R
E
Q
_
D
U
R
A
T
I
O
N
_
M
S
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
n
F
l
i
g
h
t
 
-
=
 
1
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
o
k
:
 
s
t
.
o
k
 
+
 
1
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
d
r
a
i
n
i
n
g
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
d
r
a
i
n
E
l
a
p
s
e
d
 
+
=
 
T
I
C
K
_
M
S
;


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
D
r
a
i
n
 
p
h
a
s
e
:
 
n
o
 
n
e
w
 
r
e
q
u
e
s
t
s
,
 
i
n
-
f
l
i
g
h
t
 
f
i
n
i
s
h
e
s


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
r
a
i
n
E
l
a
p
s
e
d
 
>
=
 
D
R
A
I
N
_
M
S
 
|
|
 
i
n
F
l
i
g
h
t
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
h
a
s
e
 
=
 
"
d
o
w
n
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
o
d
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
p
.
i
d
 
?
 
{
 
.
.
.
q
,
 
p
h
a
s
e
:
 
"
s
t
a
r
t
i
n
g
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
d
r
a
i
n
E
l
a
p
s
e
d
:
 
0
 
}
 
:
 
q
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
o
d
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
p
.
i
d
 
?
 
{
 
.
.
.
q
,
 
p
h
a
s
e
:
 
"
r
e
a
d
y
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
i
n
F
l
i
g
h
t
:
 
0
 
}
 
:
 
q
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
7
0
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
3
5
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
p
,
 
p
h
a
s
e
,
 
i
n
F
l
i
g
h
t
,
 
d
r
a
i
n
E
l
a
p
s
e
d
 
}
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
T
I
C
K
_
M
S
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
]
)
;




 
 
c
o
n
s
t
 
s
t
a
r
t
D
e
p
l
o
y
 
=
 
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
p
l
o
y
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
D
e
p
l
o
y
i
n
g
(
t
r
u
e
)
;


 
 
 
 
d
e
p
l
o
y
I
d
x
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
 
0
;


 
 
 
 
r
o
l
l
N
e
x
t
(
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
 
r
o
l
l
N
e
x
t
 
=
 
(
i
d
x
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


 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
P
O
D
_
C
O
U
N
T
)
 
{


 
 
 
 
 
 
s
e
t
D
e
p
l
o
y
i
n
g
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


 
 
 
 
s
e
t
P
o
d
s
(
(
p
s
)
 
=
>


 
 
 
 
 
 
p
s
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
.
i
d
 
!
=
=
 
i
d
x
)
 
r
e
t
u
r
n
 
p
;


 
 
 
 
 
 
 
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
g
r
a
c
e
f
u
l
"
)
 
{


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
p
,
 
p
h
a
s
e
:
 
"
d
r
a
i
n
i
n
g
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
d
r
a
i
n
E
l
a
p
s
e
d
:
 
0
 
}
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
A
b
r
u
p
t
:
 
d
r
o
p
 
i
n
-
f
l
i
g
h
t


 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
t
)
 
=
>
 
(
{
 
.
.
.
s
t
,
 
l
o
s
t
:
 
s
t
.
l
o
s
t
 
+
 
p
.
i
n
F
l
i
g
h
t
 
}
)
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
p
,
 
p
h
a
s
e
:
 
"
d
o
w
n
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
i
n
F
l
i
g
h
t
:
 
0
 
}
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)
,


 
 
 
 
)
;




 
 
 
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
a
b
r
u
p
t
"
)
 
{


 
 
 
 
 
 
/
/
 
R
e
s
t
a
r
t
 
i
m
m
e
d
i
a
t
e
l
y
 
f
o
r
 
t
h
e
 
d
e
m
o


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
s
e
t
P
o
d
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
i
d
x
 
?
 
{
 
.
.
.
q
,
 
p
h
a
s
e
:
 
"
s
t
a
r
t
i
n
g
"
 
a
s
 
P
o
d
P
h
a
s
e
 
}
 
:
 
q
)
)
)
;


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
s
e
t
P
o
d
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
i
d
x
 
?
 
{
 
.
.
.
q
,
 
p
h
a
s
e
:
 
"
r
e
a
d
y
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
i
n
F
l
i
g
h
t
:
 
0
 
}
 
:
 
q
)
)
)
;


 
 
 
 
 
 
 
 
}
,
 
7
0
0
)
;


 
 
 
 
 
 
}
,
 
3
0
0
)
;




 
 
 
 
 
 
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
 
r
o
l
l
N
e
x
t
(
i
d
x
 
+
 
1
)
,
 
1
5
0
0
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
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
 
r
o
l
l
N
e
x
t
(
i
d
x
 
+
 
1
)
,
 
D
R
A
I
N
_
M
S
 
+
 
1
5
0
0
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
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
P
o
d
s
(
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
 
P
O
D
_
C
O
U
N
T
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
{
 
i
d
:
 
i
,
 
p
h
a
s
e
:
 
"
r
e
a
d
y
"
 
a
s
 
P
o
d
P
h
a
s
e
,
 
i
n
F
l
i
g
h
t
:
 
0
,
 
d
r
a
i
n
E
l
a
p
s
e
d
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
S
t
a
t
s
(
{
 
o
k
:
 
0
,
 
l
o
s
t
:
 
0
 
}
)
;


 
 
 
 
s
e
t
D
e
p
l
o
y
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
d
e
p
l
o
y
I
d
x
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
 
0
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
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
}
>
R
o
l
l
 
a
 
d
e
p
l
o
y
.
 
C
o
m
p
a
r
e
 
g
r
a
c
e
f
u
l
 
v
s
 
a
b
r
u
p
t
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
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
}
>


 
 
 
 
 
 
 
 
4
 
p
o
d
s
 
s
e
r
v
e
 
t
r
a
f
f
i
c
.
 
C
l
i
c
k
 
&
l
d
q
u
o
;
d
e
p
l
o
y
&
r
d
q
u
o
;
.
 
T
h
e
 
o
r
c
h
e
s
t
r
a
t
o
r
 
r
e
s
t
a
r
t
s
 
t
h
e
m
 
o
n
e
 
a
t
 
a
 
t
i
m
e
.


 
 
 
 
 
 
 
 
T
o
g
g
l
e
 
t
h
e
 
s
t
r
a
t
e
g
y
:
 
g
r
a
c
e
f
u
l
 
d
r
a
i
n
s
 
f
o
r
 
4
s
 
b
e
f
o
r
e
 
e
x
i
t
i
n
g
;
 
a
b
r
u
p
t
 
k
i
l
l
s
 
i
n
s
t
a
n
t
l
y
,


 
 
 
 
 
 
 
 
d
r
o
p
p
i
n
g
 
i
n
-
f
l
i
g
h
t
 
r
e
q
u
e
s
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
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
7
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
 
N
E
U
T
R
A
L
 
}
}
>
s
h
u
t
d
o
w
n
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
(
[
"
g
r
a
c
e
f
u
l
"
,
 
"
a
b
r
u
p
t
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
m
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
 
s
t
r
a
t
e
g
y
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
m
 
=
=
=
 
"
g
r
a
c
e
f
u
l
"
 
?
 
S
D
 
:
 
W
A
R
N
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
m
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
t
r
a
t
e
g
y
(
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
d
e
p
l
o
y
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
d
e
p
l
o
y
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
c
 
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
b
o
r
d
e
r
)
"
}
`
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
:
 
a
c
t
i
v
e
 
?
 
`
$
{
c
}
1
8
`
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
c
 
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
 
M
O
N
O
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
7
r
e
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
d
e
p
l
o
y
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
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
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
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


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
s
t
a
r
t
D
e
p
l
o
y
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
d
e
p
l
o
y
i
n
g
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
d
e
p
l
o
y
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
d
e
p
l
o
y
i
n
g
 
?
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
 
:
 
S
D
}
`
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
:
 
d
e
p
l
o
y
i
n
g
 
?
 
"
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
"
 
:
 
`
$
{
S
D
}
1
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
d
e
p
l
o
y
i
n
g
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
O
N
O
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
7
2
r
e
m
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


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
d
e
p
l
o
y
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
P
o
w
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
d
e
p
l
o
y
i
n
g
 
?
 
"
d
e
p
l
o
y
i
n
g
…
"
 
:
 
"
r
o
l
l
i
n
g
 
d
e
p
l
o
y
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
:
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
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
2
 
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
3
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
p
o
d
s
.
m
a
p
(
(
p
)
 
=
>
 
<
P
o
d
C
a
r
d
 
k
e
y
=
{
p
.
i
d
}
 
p
o
d
=
{
p
}
 
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
2
 
g
a
p
-
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
3
3
`
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
:
 
`
$
{
S
D
}
1
0
`
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
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
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
S
U
C
C
E
S
S
F
U
L
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
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
4
r
e
m
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
 
8
0
0
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
 
}
}
>
{
s
t
a
t
s
.
o
k
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
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
t
a
t
s
.
l
o
s
t
 
>
 
0
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
}
3
3
`
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
:
 
`
$
{
s
t
a
t
s
.
l
o
s
t
 
>
 
0
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
}
1
0
`
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
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
 
s
t
a
t
s
.
l
o
s
t
 
>
 
0
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
D
R
O
P
P
E
D
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
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
4
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
s
t
a
t
s
.
l
o
s
t
 
>
 
0
 
?
 
W
A
R
N
 
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
 
}
}
>
{
s
t
a
t
s
.
l
o
s
t
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
 
f
l
e
x
-
w
r
a
p
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
 
t
r
a
f
f
i
c
"
 
:
 
"
r
e
s
u
m
e
 
t
r
a
f
f
i
c
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
b
u
t
t
o
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
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
 
o
n
C
l
i
c
k
=
{
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
r
a
t
e
g
y
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
 
y
:
 
-
6
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
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
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
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
8
6
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
#
e
5
e
7
e
b
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
5
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
s
t
r
a
t
e
g
y
 
=
=
=
 
"
g
r
a
c
e
f
u
l
"
 
?
 
S
D
 
:
 
W
A
R
N
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
r
a
t
e
g
y
 
=
=
=
 
"
g
r
a
c
e
f
u
l
"
 
?
 
"
G
R
A
C
E
F
U
L
"
 
:
 
"
A
B
R
U
P
T
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
s
t
r
a
t
e
g
y
 
=
=
=
 
"
g
r
a
c
e
f
u
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
P
o
d
 
m
a
r
k
e
d
 
u
n
h
e
a
l
t
h
y
 
→
 
L
B
 
s
t
o
p
s
 
s
e
n
d
i
n
g
 
n
e
w
 
t
r
a
f
f
i
c
 
→
 
i
n
-
f
l
i
g
h
t
 
r
e
q
u
e
s
t
s
 
f
i
n
i
s
h
 
(
u
p
 
t
o
 
4
s
 
d
r
a
i
n
)
 
→
 
p
o
d
 
e
x
i
t
s
 
c
l
e
a
n
l
y
.
 
Z
e
r
o
 
d
r
o
p
p
e
d
 
r
e
q
u
e
s
t
s
 
d
u
r
i
n
g
 
d
e
p
l
o
y
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
P
o
d
 
k
i
l
l
e
d
 
i
n
s
t
a
n
t
l
y
.
 
A
n
y
 
i
n
-
f
l
i
g
h
t
 
r
e
q
u
e
s
t
s
 
a
r
e
 
d
r
o
p
p
e
d
 
o
n
 
t
h
e
 
f
l
o
o
r
.
 
T
h
e
 
L
B
 
s
e
e
s
 
t
h
e
 
p
o
d
 
d
i
s
a
p
p
e
a
r
;
 
c
l
i
e
n
t
s
 
g
e
t
 
5
0
2
 
/
 
c
o
n
n
e
c
t
i
o
n
-
r
e
s
e
t
 
u
n
t
i
l
 
t
h
e
 
n
e
x
t
 
p
o
d
 
t
a
k
e
s
 
o
v
e
r
.
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
d
i
v
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
o
d
C
a
r
d
(
{
 
p
o
d
 
}
:
 
{
 
p
o
d
:
 
P
o
d
 
}
)
 
{


 
 
c
o
n
s
t
 
c
 
=


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
r
e
a
d
y
"
 
?
 
S
D
 
:


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
d
r
a
i
n
i
n
g
"
 
?
 
P
U
R
P
L
E
 
:


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
s
t
a
r
t
i
n
g
"
 
?
 
W
A
R
N
 
:


 
 
 
 
N
E
U
T
R
A
L
;


 
 
c
o
n
s
t
 
l
a
b
e
l
 
=


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
r
e
a
d
y
"
 
?
 
"
R
E
A
D
Y
"
 
:


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
d
r
a
i
n
i
n
g
"
 
?
 
"
D
R
A
I
N
I
N
G
"
 
:


 
 
 
 
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
s
t
a
r
t
i
n
g
"
 
?
 
"
S
T
A
R
T
I
N
G
"
 
:


 
 
 
 
"
D
O
W
N
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
 
b
o
r
d
e
r
C
o
l
o
r
:
 
`
$
{
c
}
5
5
`
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
C
o
l
o
r
:
 
`
$
{
c
}
1
0
`
 
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
3
 
}
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
`
,


 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
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
"
,


 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
r
e
a
d
y
"
 
&
&
 
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
.
3
 
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
 
1
.
4
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
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
i
n
s
e
t
:
 
0
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
:
 
c
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
o
s
i
t
i
o
n
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
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
7
8
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
c
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
P
O
D
-
{
p
o
d
.
i
d
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
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
2
r
e
m
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
 
c
o
l
o
r
:
 
c
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
 
}
}
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
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
7
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
 
N
E
U
T
R
A
L
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
i
n
-
f
l
i
g
h
t
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
p
o
d
.
i
n
F
l
i
g
h
t
 
>
 
0
 
?
 
c
 
:
 
N
E
U
T
R
A
L
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
 
}
}
>
{
p
o
d
.
i
n
F
l
i
g
h
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


 
 
 
 
 
 
 
 
{
p
o
d
.
p
h
a
s
e
 
=
=
=
 
"
d
r
a
i
n
i
n
g
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
4
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
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
 
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
 
w
i
d
t
h
:
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
(
p
o
d
.
d
r
a
i
n
E
l
a
p
s
e
d
 
/
 
D
R
A
I
N
_
M
S
)
 
*
 
1
0
0
)
}
%
`
 
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
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
1
0
0
%
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
:
 
c
 
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
 
b
t
n
(
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
)
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
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
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
:
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
,


 
 
 
 
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
 
M
O
N
O
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
7
2
r
e
m
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


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
T
h
e
 
a
c
t
u
a
l
 
c
o
d
e
 
p
a
t
t
e
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
C
o
d
e
P
a
t
t
e
r
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
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
}
>
W
h
a
t
 
g
r
a
c
e
f
u
l
 
s
h
u
t
d
o
w
n
 
a
c
t
u
a
l
l
y
 
l
o
o
k
s
 
l
i
k
e
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
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
}
>


 
 
 
 
 
 
 
 
E
v
e
r
y
 
p
r
o
d
u
c
t
i
o
n
 
H
T
T
P
 
s
e
r
v
e
r
 
s
h
o
u
l
d
 
l
o
o
k
 
s
o
m
e
t
h
i
n
g
 
l
i
k
e
 
t
h
i
s
.
 
T
r
a
p
 
S
I
G
T
E
R
M
,
 
s
t
o
p
 
a
c
c
e
p
t
i
n
g


 
 
 
 
 
 
 
 
n
e
w
 
w
o
r
k
,
 
d
r
a
i
n
 
i
n
-
f
l
i
g
h
t
,
 
c
l
o
s
e
 
r
e
s
o
u
r
c
e
s
,
 
e
x
i
t
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
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
:
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
<
p
r
e
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
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
 
M
O
N
O
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
8
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
#
e
5
e
7
e
b
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
7
5
,
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
E
x
p
r
e
s
s
.
j
s
 
e
x
a
m
p
l
e
`
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
\
n
"
}


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
s
e
r
v
e
r
 
=
 
a
p
p
.
l
i
s
t
e
n
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
3
0
0
0
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
"
}


 
 
 
 
 
 
 
 
 
 
p
r
o
c
e
s
s
.
o
n
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
S
I
G
T
E
R
M
"
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
s
y
n
c
<
/
s
p
a
n
>
 
(
)
 
=
&
g
t
;
 
{
"
{
"
}


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
1
.
 
f
l
i
p
 
r
e
a
d
i
n
e
s
s
 
t
o
 
f
a
l
s
e
`
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
\
n
 
 
"
}
h
e
a
l
t
h
y
 
=
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
f
a
l
s
e
<
/
s
p
a
n
>
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
2
.
 
w
a
i
t
 
a
 
b
e
a
t
 
f
o
r
 
L
B
 
/
 
m
e
s
h
 
t
o
 
n
o
t
i
c
e
`
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
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
s
l
e
e
p
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
2
_
0
0
0
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
3
.
 
s
t
o
p
 
a
c
c
e
p
t
i
n
g
 
n
e
w
 
c
o
n
n
e
c
t
i
o
n
s
,
 
d
r
a
i
n
 
e
x
i
s
t
i
n
g
`
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
\
n
 
 
"
}
s
e
r
v
e
r
.
c
l
o
s
e
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
s
y
n
c
<
/
s
p
a
n
>
 
(
)
 
=
&
g
t
;
 
{
"
{
"
}


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
4
.
 
c
l
o
s
e
 
d
o
w
n
s
t
r
e
a
m
s
 
(
D
B
 
p
o
o
l
,
 
R
e
d
i
s
,
 
b
r
o
k
e
r
)
`
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
\
n
 
 
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
d
b
.
e
n
d
(
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
r
e
d
i
s
.
q
u
i
t
(
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
k
a
f
k
a
.
d
i
s
c
o
n
n
e
c
t
(
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
p
r
o
c
e
s
s
.
e
x
i
t
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
0
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
{
"
}
"
}
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
5
.
 
l
a
s
t
-
r
e
s
o
r
t
:
 
h
a
r
d
 
e
x
i
t
 
i
f
 
s
o
m
e
t
h
i
n
g
 
i
s
 
s
t
u
c
k
`
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
\
n
 
 
"
}
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
&
g
t
;
 
p
r
o
c
e
s
s
.
e
x
i
t
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
<
/
s
p
a
n
>
)
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
2
5
_
0
0
0
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
{
"
}
"
}
)
;


 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
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
 
v
i
s
i
b
l
e
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
 
}
 
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
2
 
g
a
p
-
3
 
m
t
-
5
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
t
h
e
 
2
s
 
s
l
e
e
p
"
,
 
v
:
 
"
K
u
b
e
r
n
e
t
e
s
 
p
r
o
p
a
g
a
t
e
s
 
t
h
e
 
r
e
a
d
i
n
e
s
s
 
c
h
a
n
g
e
 
a
s
y
n
c
h
r
o
n
o
u
s
l
y
.
 
W
i
t
h
o
u
t
 
a
 
s
m
a
l
l
 
w
a
i
t
,
 
y
o
u
 
m
i
g
h
t
 
s
t
i
l
l
 
r
e
c
e
i
v
e
 
n
e
w
 
t
r
a
f
f
i
c
 
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
 
s
e
c
o
n
d
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
t
h
e
 
h
a
r
d
 
t
i
m
e
o
u
t
"
,
 
v
:
 
"
I
f
 
a
 
h
u
n
g
 
r
e
q
u
e
s
t
 
b
l
o
c
k
s
 
s
e
r
v
e
r
.
c
l
o
s
e
,
 
t
h
e
 
K
8
s
 
g
r
a
c
e
 
p
e
r
i
o
d
 
(
3
0
s
 
d
e
f
a
u
l
t
)
 
w
i
l
l
 
S
I
G
K
I
L
L
 
a
n
y
w
a
y
.
 
B
e
t
t
e
r
 
t
o
 
f
o
r
c
e
-
e
x
i
t
 
a
t
 
2
5
s
 
a
n
d
 
l
o
g
 
t
h
e
 
o
f
f
e
n
d
e
r
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
O
r
d
e
r
 
m
a
t
t
e
r
s
"
,
 
v
:
 
"
D
r
a
i
n
 
H
T
T
P
 
f
i
r
s
t
 
(
n
o
 
n
e
w
 
w
o
r
k
)
,
 
T
H
E
N
 
c
l
o
s
e
 
D
B
 
p
o
o
l
s
.
 
C
l
o
s
i
n
g
 
t
h
e
 
D
B
 
w
h
i
l
e
 
r
e
q
u
e
s
t
s
 
s
t
i
l
l
 
n
e
e
d
 
i
t
 
j
u
s
t
 
t
u
r
n
s
 
g
r
a
c
e
f
u
l
n
e
s
s
 
i
n
t
o
 
e
r
r
o
r
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
P
r
e
S
t
o
p
 
h
o
o
k
"
,
 
v
:
 
"
K
8
s
 
l
e
t
s
 
y
o
u
 
r
u
n
 
a
 
s
c
r
i
p
t
 
b
e
f
o
r
e
 
S
I
G
T
E
R
M
.
 
U
s
e
 
i
t
 
f
o
r
 
t
h
e
 
r
e
a
d
i
n
e
s
s
 
f
l
i
p
 
+
 
s
l
e
e
p
 
s
o
 
t
h
e
 
L
B
 
u
p
d
a
t
e
s
 
B
E
F
O
R
E
 
t
h
e
 
s
e
r
v
e
r
 
s
t
o
p
s
 
a
c
c
e
p
t
i
n
g
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
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
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
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
 
8
 
}
,
 
v
i
s
i
b
l
e
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
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
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
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
8
4
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
5
5
 
}
}
>
{
c
.
v
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


 
 
 
 
 
 
 
 
)
)
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
6
_
G
r
a
c
e
f
u
l
S
h
u
t
d
o
w
n
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
R
o
l
l
 
t
h
e
 
D
e
p
l
o
y
"
,
 
i
c
o
n
:
 
<
P
o
w
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
G
r
a
c
e
f
u
l
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
o
d
e
"
,
 
l
a
b
e
l
:
 
"
C
o
d
e
 
P
a
t
t
e
r
n
"
,
 
i
c
o
n
:
 
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
C
o
d
e
P
a
t
t
e
r
n
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
f
l
i
p
 
t
h
e
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
 
t
o
 
u
n
h
e
a
l
t
h
y
 
B
E
F
O
R
E
 
y
o
u
 
s
t
o
p
 
a
c
c
e
p
t
i
n
g
 
c
o
n
n
e
c
t
i
o
n
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
I
t
'
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
O
t
h
e
r
w
i
s
e
 
t
h
e
 
L
B
 
k
e
e
p
s
 
s
e
n
d
i
n
g
 
y
o
u
 
n
e
w
 
r
e
q
u
e
s
t
s
 
f
o
r
 
a
 
f
e
w
 
s
e
c
o
n
d
s
 
—
 
e
x
a
c
t
l
y
 
t
h
e
 
r
e
q
u
e
s
t
s
 
t
h
a
t
 
g
e
t
 
d
r
o
p
p
e
d
.
"
,


 
 
 
 
 
 
 
 
"
L
o
g
s
 
r
e
q
u
i
r
e
 
i
t
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
c
l
e
a
n
s
 
m
e
m
o
r
y
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
R
e
a
d
i
n
e
s
s
 
p
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
 
i
s
 
a
s
y
n
c
.
 
M
a
r
k
 
u
n
h
e
a
l
t
h
y
 
f
i
r
s
t
,
 
w
a
i
t
 
l
o
n
g
 
e
n
o
u
g
h
 
f
o
r
 
t
h
e
 
L
B
 
t
o
 
n
o
t
i
c
e
,
 
T
H
E
N
 
s
t
o
p
 
a
c
c
e
p
t
i
n
g
.
 
O
t
h
e
r
w
i
s
e
 
n
e
w
 
r
e
q
u
e
s
t
s
 
a
r
r
i
v
e
 
a
f
t
e
r
 
y
o
u
'
v
e
 
s
t
o
p
p
e
d
 
s
e
r
v
i
n
g
 
a
n
d
 
t
i
m
e
 
o
u
t
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
K
u
b
e
r
n
e
t
e
s
 
d
e
f
a
u
l
t
 
t
e
r
m
i
n
a
t
i
o
n
G
r
a
c
e
P
e
r
i
o
d
S
e
c
o
n
d
s
 
i
s
 
3
0
.
 
W
h
a
t
 
h
a
p
p
e
n
s
 
a
t
 
3
0
s
 
i
f
 
y
o
u
r
 
p
o
d
 
h
a
s
n
'
t
 
e
x
i
t
e
d
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
P
o
d
 
i
s
 
a
s
k
e
d
 
n
i
c
e
l
y
 
a
g
a
i
n
.
"
,


 
 
 
 
 
 
 
 
"
S
I
G
K
I
L
L
 
—
 
t
h
e
 
k
e
r
n
e
l
 
t
e
r
m
i
n
a
t
e
s
 
t
h
e
 
p
r
o
c
e
s
s
.
 
I
n
-
f
l
i
g
h
t
 
w
o
r
k
 
i
s
 
l
o
s
t
.
"
,


 
 
 
 
 
 
 
 
"
P
o
d
 
r
e
s
t
a
r
t
s
.
"
,


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
A
f
t
e
r
 
t
h
e
 
g
r
a
c
e
 
p
e
r
i
o
d
,
 
S
I
G
K
I
L
L
 
i
s
 
n
o
n
-
n
e
g
o
t
i
a
b
l
e
.
 
I
f
 
y
o
u
r
 
s
h
u
t
d
o
w
n
 
l
o
g
i
c
 
e
x
c
e
e
d
s
 
3
0
s
,
 
i
n
c
r
e
a
s
e
 
t
h
e
 
g
r
a
c
e
 
p
e
r
i
o
d
 
o
r
 
f
i
x
 
t
h
e
 
s
l
o
w
 
s
h
u
t
d
o
w
n
 
p
a
t
h
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
n
 
o
r
d
e
r
 
i
s
 
b
e
i
n
g
 
p
r
o
c
e
s
s
e
d
 
w
h
e
n
 
S
I
G
T
E
R
M
 
a
r
r
i
v
e
s
.
 
T
h
e
 
p
o
d
 
h
a
s
 
3
 
s
e
c
o
n
d
s
 
t
o
 
d
r
a
i
n
.
 
B
e
s
t
 
b
e
h
a
v
i
o
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
C
a
n
c
e
l
 
t
h
e
 
o
r
d
e
r
 
a
n
d
 
r
e
t
r
y
 
o
n
 
a
 
n
e
w
 
p
o
d
.
"
,


 
 
 
 
 
 
 
 
"
F
i
n
i
s
h
 
t
h
e
 
c
u
r
r
e
n
t
 
o
r
d
e
r
,
 
t
h
e
n
 
e
x
i
t
.
 
T
h
e
 
n
e
x
t
 
o
r
d
e
r
 
g
o
e
s
 
t
o
 
a
 
d
i
f
f
e
r
e
n
t
 
p
o
d
.
"
,


 
 
 
 
 
 
 
 
"
D
r
o
p
 
i
t
.
"
,


 
 
 
 
 
 
 
 
"
R
e
s
t
a
r
t
 
t
h
e
 
p
o
d
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
I
n
-
f
l
i
g
h
t
 
r
e
q
u
e
s
t
s
 
s
h
o
u
l
d
 
f
i
n
i
s
h
 
w
h
e
r
e
 
t
h
e
y
 
s
t
a
r
t
e
d
.
 
N
e
w
 
t
r
a
f
f
i
c
 
i
s
 
a
l
r
e
a
d
y
 
b
e
i
n
g
 
r
o
u
t
e
d
 
e
l
s
e
w
h
e
r
e
 
(
b
e
c
a
u
s
e
 
r
e
a
d
i
n
e
s
s
 
f
l
i
p
p
e
d
)
.
 
D
r
a
i
n
 
t
i
m
e
 
e
x
i
s
t
s
 
e
x
a
c
t
l
y
 
t
o
 
l
e
t
 
i
n
-
f
l
i
g
h
t
 
w
o
r
k
 
c
o
m
p
l
e
t
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
f
t
e
r
 
s
e
r
v
e
r
.
c
l
o
s
e
(
)
 
f
i
n
i
s
h
e
s
,
 
w
h
a
t
 
s
h
o
u
l
d
 
h
a
p
p
e
n
 
N
E
X
T
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
E
x
i
t
 
i
m
m
e
d
i
a
t
e
l
y
.
"
,


 
 
 
 
 
 
 
 
"
C
l
o
s
e
 
D
B
 
/
 
R
e
d
i
s
 
/
 
m
e
s
s
a
g
e
-
b
r
o
k
e
r
 
c
o
n
n
e
c
t
i
o
n
s
,
 
t
h
e
n
 
e
x
i
t
.
"
,


 
 
 
 
 
 
 
 
"
S
e
n
d
 
a
 
S
l
a
c
k
 
m
e
s
s
a
g
e
.
"
,


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
 
e
l
s
e
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
H
T
T
P
 
d
r
a
i
n
 
c
o
m
e
s
 
f
i
r
s
t
 
(
n
o
 
n
e
w
 
w
o
r
k
)
.
 
T
h
e
n
 
c
l
o
s
e
 
d
o
w
n
s
t
r
e
a
m
 
c
o
n
n
e
c
t
i
o
n
s
 
i
n
 
r
e
v
e
r
s
e
-
o
r
d
e
r
 
o
f
 
d
e
p
e
n
d
e
n
c
e
.
 
E
x
i
t
i
n
g
 
b
e
f
o
r
e
 
c
l
o
s
i
n
g
 
t
h
e
m
 
c
a
n
 
l
e
a
v
e
 
u
n
f
l
u
s
h
e
d
 
b
u
f
f
e
r
s
,
 
p
a
r
t
i
a
l
 
c
o
m
m
i
t
s
,
 
o
r
 
c
o
n
n
e
c
t
i
o
n
 
l
e
a
k
s
.
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
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
G
r
a
c
e
f
u
l
 
S
h
u
t
d
o
w
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
'
h
o
w
 
d
o
 
y
o
u
 
d
o
 
z
e
r
o
-
d
o
w
n
t
i
m
e
 
d
e
p
l
o
y
s
'
 
a
n
s
w
e
r
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}



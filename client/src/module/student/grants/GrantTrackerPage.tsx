
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
M
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
 
m
e
m
o
 
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


 
 
A
r
r
o
w
L
e
f
t
,


 
 
P
l
u
s
,


 
 
S
e
a
r
c
h
,


 
 
X
,


 
 
T
r
a
s
h
2
,


 
 
C
l
i
p
b
o
a
r
d
L
i
s
t
,


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
S
e
n
d
,


 
 
S
l
i
d
e
r
s
H
o
r
i
z
o
n
t
a
l
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


 
 
S
t
i
c
k
y
N
o
t
e
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
 
g
r
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
.
/
g
r
a
n
t
s
D
a
t
a
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
u
t
t
o
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
u
i
/
b
u
t
t
o
n
"
;




/
/
 
-
-
-
-
 
T
y
p
e
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




t
y
p
e
 
A
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
S
t
a
t
u
s
 
=


 
 
|
 
"
I
n
t
e
r
e
s
t
e
d
"


 
 
|
 
"
P
r
e
p
a
r
i
n
g
"


 
 
|
 
"
A
p
p
l
i
e
d
"


 
 
|
 
"
A
c
c
e
p
t
e
d
"


 
 
|
 
"
R
e
j
e
c
t
e
d
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
 
T
r
a
c
k
e
d
G
r
a
n
t
 
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


 
 
g
r
a
n
t
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
a
t
u
s
:
 
A
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
S
t
a
t
u
s
;


 
 
n
o
t
e
s
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
a
d
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


 
 
d
a
t
e
A
d
d
e
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




/
/
 
-
-
-
-
 
C
o
n
s
t
a
n
t
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
g
r
a
n
t
-
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
"
;




c
o
n
s
t
 
A
L
L
_
S
T
A
T
U
S
E
S
:
 
A
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
S
t
a
t
u
s
[
]
 
=
 
[


 
 
"
I
n
t
e
r
e
s
t
e
d
"
,


 
 
"
P
r
e
p
a
r
i
n
g
"
,


 
 
"
A
p
p
l
i
e
d
"
,


 
 
"
A
c
c
e
p
t
e
d
"
,


 
 
"
R
e
j
e
c
t
e
d
"
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
A
T
U
S
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
A
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
S
t
a
t
u
s
,
 
{
 
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
 
b
g
:
 
s
t
r
i
n
g
 
}
>
 
=


 
 
{


 
 
 
 
I
n
t
e
r
e
s
t
e
d
:
 
{


 
 
 
 
 
 
c
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
b
l
u
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
b
l
u
e
-
4
0
0
"
,


 
 
 
 
 
 
b
g
:
 
"
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
3
0
"
,


 
 
 
 
}
,


 
 
 
 
P
r
e
p
a
r
i
n
g
:
 
{


 
 
 
 
 
 
c
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
"
,


 
 
 
 
 
 
b
g
:
 
"
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
3
0
"
,


 
 
 
 
}
,


 
 
 
 
A
p
p
l
i
e
d
:
 
{


 
 
 
 
 
 
c
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
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
,


 
 
 
 
 
 
b
g
:
 
"
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
0
0
/
3
0
"
,


 
 
 
 
}
,


 
 
 
 
A
c
c
e
p
t
e
d
:
 
{


 
 
 
 
 
 
c
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
e
m
e
r
a
l
d
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
"
,


 
 
 
 
 
 
b
g
:
 
"
b
g
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
9
0
0
/
3
0
"
,


 
 
 
 
}
,


 
 
 
 
R
e
j
e
c
t
e
d
:
 
{


 
 
 
 
 
 
c
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
r
e
d
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
r
e
d
-
4
0
0
"
,


 
 
 
 
 
 
b
g
:
 
"
b
g
-
r
e
d
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
r
e
d
-
9
0
0
/
3
0
"
,


 
 
 
 
}
,


 
 
}
;




/
/
 
-
-
-
-
 
H
e
l
p
e
r
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




f
u
n
c
t
i
o
n
 
l
o
a
d
G
r
a
n
t
s
(
)
:
 
T
r
a
c
k
e
d
G
r
a
n
t
[
]
 
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
 
s
t
o
r
e
d
 
=
 
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
S
T
O
R
A
G
E
_
K
E
Y
)
;


 
 
 
 
r
e
t
u
r
n
 
s
t
o
r
e
d
 
?
 
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
s
t
o
r
e
d
)
 
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




f
u
n
c
t
i
o
n
 
p
e
r
s
i
s
t
G
r
a
n
t
s
(
l
i
s
t
:
 
T
r
a
c
k
e
d
G
r
a
n
t
[
]
)
 
{


 
 
t
r
y
 
{


 
 
 
 
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
S
T
O
R
A
G
E
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
l
i
s
t
)
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
/
*
 
i
g
n
o
r
e
 
*
/


 
 
}


}




/
/
 
-
-
-
-
 
T
r
a
c
k
e
d
G
r
a
n
t
C
a
r
d
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




c
o
n
s
t
 
T
r
a
c
k
e
d
G
r
a
n
t
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
 
T
r
a
c
k
e
d
G
r
a
n
t
C
a
r
d
(
{


 
 
g
r
a
n
t
,


 
 
o
n
U
p
d
a
t
e
,


 
 
o
n
D
e
l
e
t
e
,


 
 
i
n
d
e
x
,


}
:
 
{


 
 
g
r
a
n
t
:
 
T
r
a
c
k
e
d
G
r
a
n
t
;


 
 
o
n
U
p
d
a
t
e
:
 
(
i
d
:
 
s
t
r
i
n
g
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
T
r
a
c
k
e
d
G
r
a
n
t
>
)
 
=
>
 
v
o
i
d
;


 
 
o
n
D
e
l
e
t
e
:
 
(
i
d
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


 
 
i
n
d
e
x
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
[
c
o
n
f
i
r
m
D
e
l
e
t
e
,
 
s
e
t
C
o
n
f
i
r
m
D
e
l
e
t
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
 
s
c
 
=
 
S
T
A
T
U
S
_
C
O
L
O
R
S
[
g
r
a
n
t
.
s
t
a
t
u
s
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
1
2
 
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
3
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
g
r
a
y
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
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
8
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
2
x
l
 
p
-
5
 
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
g
 
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
g
r
a
y
-
1
0
0
/
6
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
s
h
a
d
o
w
-
g
r
a
y
-
9
0
0
/
4
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


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
T
o
p
 
r
o
w
:
 
n
a
m
e
 
+
 
d
e
l
e
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
 
l
e
a
d
i
n
g
-
s
n
u
g
 
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
g
r
a
n
t
.
g
r
a
n
t
N
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
g
r
a
y
-
5
0
0
 
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
g
r
a
n
t
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
c
o
n
f
i
r
m
D
e
l
e
t
e
 
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
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
D
e
l
e
t
e
(
g
r
a
n
t
.
i
d
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
b
g
-
r
e
d
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
r
e
d
-
9
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
r
e
d
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
r
e
d
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
r
e
d
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
r
e
d
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
f
i
r
m


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
C
o
n
f
i
r
m
D
e
l
e
t
e
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
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
(
)
 
=
>
 
s
e
t
C
o
n
f
i
r
m
D
e
l
e
t
e
(
t
r
u
e
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
g
r
a
y
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
r
e
d
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
r
e
d
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
r
e
d
-
9
0
0
/
2
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


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
B
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
/
*
 
S
t
a
t
u
s
 
s
e
l
e
c
t
 
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
<
l
a
b
e
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
g
r
a
y
-
5
0
0
 
m
b
-
1
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
S
t
a
t
u
s


 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
r
a
n
t
.
s
t
a
t
u
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
e
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
o
n
U
p
d
a
t
e
(
g
r
a
n
t
.
i
d
,
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
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
 
a
s
 
A
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
S
t
a
t
u
s
,


 
 
 
 
 
 
 
 
 
 
 
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
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
m
e
d
i
u
m
 
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
g
r
a
y
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
g
r
a
y
-
7
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
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
s
c
.
b
g
}
 
$
{
s
c
.
c
o
l
o
r
}
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
A
L
L
_
S
T
A
T
U
S
E
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
o
p
t
i
o
n
 
k
e
y
=
{
s
}
 
v
a
l
u
e
=
{
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
D
e
a
d
l
i
n
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
<
l
a
b
e
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
g
r
a
y
-
5
0
0
 
m
b
-
1
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
D
e
a
d
l
i
n
e


 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
d
a
t
e
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
r
a
n
t
.
d
e
a
d
l
i
n
e
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
 
o
n
U
p
d
a
t
e
(
g
r
a
n
t
.
i
d
,
 
{
 
d
e
a
d
l
i
n
e
:
 
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
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
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
x
l
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
7
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
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
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
d
i
v
>




 
 
 
 
 
 
{
/
*
 
N
o
t
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
<
l
a
b
e
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
g
r
a
y
-
5
0
0
 
m
b
-
1
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
N
o
t
e
s


 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
r
a
n
t
.
n
o
t
e
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
e
)
 
=
>
 
o
n
U
p
d
a
t
e
(
g
r
a
n
t
.
i
d
,
 
{
 
n
o
t
e
s
:
 
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
 
}
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
A
d
d
 
n
o
t
e
s
 
a
b
o
u
t
 
t
h
i
s
 
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
.
.
.
"


 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
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
x
l
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
7
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
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
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
g
r
a
y
-
6
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
0
 
r
e
s
i
z
e
-
n
o
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
"


 
 
 
 
 
 
 
 
/
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
 
D
a
t
e
 
a
d
d
e
d
 
*
/
}


 
 
 
 
 
 
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
g
r
a
y
-
6
0
0
"
>


 
 
 
 
 
 
 
 
A
d
d
e
d
{
"
 
"
}


 
 
 
 
 
 
 
 
{
n
e
w
 
D
a
t
e
(
g
r
a
n
t
.
d
a
t
e
A
d
d
e
d
)
.
t
o
L
o
c
a
l
e
D
a
t
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
U
S
"
,
 
{


 
 
 
 
 
 
 
 
 
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,


 
 
 
 
 
 
 
 
 
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,


 
 
 
 
 
 
 
 
 
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,


 
 
 
 
 
 
 
 
}
)
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
;


}
)
;




/
/
 
-
-
-
-
 
A
d
d
 
G
r
a
n
t
 
M
o
d
a
l
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




f
u
n
c
t
i
o
n
 
A
d
d
G
r
a
n
t
M
o
d
a
l
(
{


 
 
t
r
a
c
k
e
d
I
d
s
,


 
 
o
n
A
d
d
,


 
 
o
n
C
l
o
s
e
,


}
:
 
{


 
 
t
r
a
c
k
e
d
I
d
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
o
n
A
d
d
:
 
(
g
r
a
n
t
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
,
 
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


}
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
"
"
)
;




 
 
c
o
n
s
t
 
r
e
s
u
l
t
s
 
=
 
u
s
e
M
e
m
o
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
 
a
v
a
i
l
a
b
l
e
 
=
 
g
r
a
n
t
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
g
)
 
=
>
 
!
t
r
a
c
k
e
d
I
d
s
.
h
a
s
(
`
$
{
g
.
n
a
m
e
}
-
-
$
{
g
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
}
`
)


 
 
 
 
)
;


 
 
 
 
i
f
 
(
!
s
e
a
r
c
h
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
a
v
a
i
l
a
b
l
e
;


 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
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


 
 
 
 
r
e
t
u
r
n
 
a
v
a
i
l
a
b
l
e
.
f
i
l
t
e
r
(


 
 
 
 
 
 
(
g
)
 
=
>


 
 
 
 
 
 
 
 
g
.
n
a
m
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
q
)
 
|
|


 
 
 
 
 
 
 
 
g
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
q
)
 
|
|


 
 
 
 
 
 
 
 
g
.
e
c
o
s
y
s
t
e
m
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
q
)
 
|
|


 
 
 
 
 
 
 
 
g
.
t
a
g
s
.
s
o
m
e
(
(
t
)
 
=
>
 
t
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
q
)
)


 
 
 
 
)
;


 
 
}
,
 
[
s
e
a
r
c
h
,
 
t
r
a
c
k
e
d
I
d
s
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
 
p
-
4
 
b
g
-
b
l
a
c
k
/
4
0
 
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


 
 
 
 
 
 
 
 
c
l
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
g
r
a
y
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
2
x
l
 
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
l
g
 
m
a
x
-
h
-
[
8
0
v
h
]
 
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


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
M
o
d
a
l
 
h
e
a
d
e
r
 
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
 
p
x
-
5
 
p
y
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
g
r
a
y
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
g
r
a
y
-
8
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
d
d
 
G
r
a
n
t
 
t
o
 
T
r
a
c
k
e
r


 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"
 
m
o
d
e
=
"
i
c
o
n
"
 
s
i
z
e
=
"
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
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
B
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




 
 
 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
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
5
 
p
y
-
3
 
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
g
r
a
y
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
g
r
a
y
-
8
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
3
 
t
o
p
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
y
-
1
/
2
 
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
g
r
a
y
-
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
o
F
o
c
u
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
=
"
S
e
a
r
c
h
 
g
r
a
n
t
s
 
b
y
 
n
a
m
e
,
 
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
,
 
e
c
o
s
y
s
t
e
m
.
.
.
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
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
 
p
l
-
1
0
 
p
r
-
4
 
p
y
-
2
.
5
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
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
g
r
a
y
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
g
r
a
y
-
7
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
g
r
a
y
-
5
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
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
 
G
r
a
n
t
 
l
i
s
t
 
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
-
1
 
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
3
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
c
e
n
t
e
r
 
p
y
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
i
p
b
o
a
r
d
L
i
s
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
8
 
h
-
8
 
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
g
r
a
y
-
6
0
0
 
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
e
d
I
d
s
.
s
i
z
e
 
=
=
=
 
g
r
a
n
t
s
.
l
e
n
g
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
Y
o
u
 
a
r
e
 
a
l
r
e
a
d
y
 
t
r
a
c
k
i
n
g
 
a
l
l
 
g
r
a
n
t
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
N
o
 
m
a
t
c
h
i
n
g
 
g
r
a
n
t
s
 
f
o
u
n
d
"
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
g
)
 
=
>
 
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
g
.
i
d
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
d
d
(
g
.
n
a
m
e
,
 
g
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
x
-
3
 
p
y
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
x
l
 
t
e
x
t
-
l
e
f
t
 
h
o
v
e
r
:
b
g
-
g
r
a
y
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
g
r
a
y
-
8
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
 
g
r
o
u
p
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
l
g
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
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
g
r
a
y
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
g
r
a
y
-
7
0
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
 
s
h
r
i
n
k
-
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
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
g
.
l
o
g
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
g
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
w
-
5
 
h
-
5
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
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
m
g
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
I
m
a
g
e
E
l
e
m
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
p
a
n
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
s
p
a
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
c
l
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
g
r
a
y
-
5
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
t
e
x
t
C
o
n
t
e
n
t
 
=
 
g
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
p
a
r
e
n
t
E
l
e
m
e
n
t
?
.
a
p
p
e
n
d
C
h
i
l
d
(
s
p
a
n
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
r
u
n
c
a
t
e
 
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
b
l
u
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
b
l
u
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
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
g
r
a
y
-
5
0
0
 
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
g
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
}
 
-
 
{
g
.
e
c
o
s
y
s
t
e
m
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
P
l
u
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
g
r
a
y
-
6
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
b
l
u
e
-
5
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




/
/
 
-
-
-
-
 
P
a
g
e
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




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
r
a
n
t
T
r
a
c
k
e
r
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
t
r
a
c
k
e
d
G
r
a
n
t
s
,
 
s
e
t
T
r
a
c
k
e
d
G
r
a
n
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
T
r
a
c
k
e
d
G
r
a
n
t
[
]
>
(
l
o
a
d
G
r
a
n
t
s
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
u
s
F
i
l
t
e
r
,
 
s
e
t
S
t
a
t
u
s
F
i
l
t
e
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
A
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
S
t
a
t
u
s
 
|
 
"
A
L
L
"
>
(


 
 
 
 
"
A
L
L
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
o
r
t
B
y
,
 
s
e
t
S
o
r
t
B
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
d
e
a
d
l
i
n
e
"
 
|
 
"
d
a
t
e
A
d
d
e
d
"
>
(
"
d
a
t
e
A
d
d
e
d
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
h
o
w
A
d
d
M
o
d
a
l
,
 
s
e
t
S
h
o
w
A
d
d
M
o
d
a
l
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
-
 
P
e
r
s
i
s
t
e
n
c
e
 
h
e
l
p
e
r
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




 
 
c
o
n
s
t
 
s
a
v
e
G
r
a
n
t
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
n
e
x
t
:
 
T
r
a
c
k
e
d
G
r
a
n
t
[
]
)
 
=
>
 
{


 
 
 
 
s
e
t
T
r
a
c
k
e
d
G
r
a
n
t
s
(
n
e
x
t
)
;


 
 
 
 
p
e
r
s
i
s
t
G
r
a
n
t
s
(
n
e
x
t
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
 
a
d
d
G
r
a
n
t
 
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
g
r
a
n
t
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
,
 
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


 
 
 
 
 
 
c
o
n
s
t
 
e
n
t
r
y
:
 
T
r
a
c
k
e
d
G
r
a
n
t
 
=
 
{


 
 
 
 
 
 
 
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,


 
 
 
 
 
 
 
 
g
r
a
n
t
N
a
m
e
,


 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
"
I
n
t
e
r
e
s
t
e
d
"
,


 
 
 
 
 
 
 
 
n
o
t
e
s
:
 
"
"
,


 
 
 
 
 
 
 
 
d
e
a
d
l
i
n
e
:
 
"
"
,


 
 
 
 
 
 
 
 
d
a
t
e
A
d
d
e
d
:
 
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
t
o
I
S
O
S
t
r
i
n
g
(
)
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
s
a
v
e
G
r
a
n
t
s
(
[
e
n
t
r
y
,
 
.
.
.
t
r
a
c
k
e
d
G
r
a
n
t
s
]
)
;


 
 
 
 
}
,


 
 
 
 
[
t
r
a
c
k
e
d
G
r
a
n
t
s
,
 
s
a
v
e
G
r
a
n
t
s
]


 
 
)
;




 
 
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
G
r
a
n
t
 
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
 
s
t
r
i
n
g
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
T
r
a
c
k
e
d
G
r
a
n
t
>
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
 
t
r
a
c
k
e
d
G
r
a
n
t
s
.
m
a
p
(
(
g
)
 
=
>


 
 
 
 
 
 
 
 
g
.
i
d
 
=
=
=
 
i
d
 
?
 
{
 
.
.
.
g
,
 
.
.
.
u
p
d
a
t
e
s
 
}
 
:
 
g


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
a
v
e
G
r
a
n
t
s
(
n
e
x
t
)
;


 
 
 
 
}
,


 
 
 
 
[
t
r
a
c
k
e
d
G
r
a
n
t
s
,
 
s
a
v
e
G
r
a
n
t
s
]


 
 
)
;




 
 
c
o
n
s
t
 
d
e
l
e
t
e
G
r
a
n
t
 
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
a
v
e
G
r
a
n
t
s
(
t
r
a
c
k
e
d
G
r
a
n
t
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
g
)
 
=
>
 
g
.
i
d
 
!
=
=
 
i
d
)
)
;


 
 
 
 
}
,


 
 
 
 
[
t
r
a
c
k
e
d
G
r
a
n
t
s
,
 
s
a
v
e
G
r
a
n
t
s
]


 
 
)
;




 
 
/
/
 
-
-
-
-
 
D
e
r
i
v
e
d
 
d
a
t
a
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




 
 
c
o
n
s
t
 
t
r
a
c
k
e
d
I
d
s
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>


 
 
 
 
 
 
n
e
w
 
S
e
t
(
t
r
a
c
k
e
d
G
r
a
n
t
s
.
m
a
p
(
(
g
)
 
=
>
 
`
$
{
g
.
g
r
a
n
t
N
a
m
e
}
-
-
$
{
g
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
}
`
)
)
,


 
 
 
 
[
t
r
a
c
k
e
d
G
r
a
n
t
s
]


 
 
)
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
 
=
 
u
s
e
M
e
m
o
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
 
l
i
s
t
 
=


 
 
 
 
 
 
s
t
a
t
u
s
F
i
l
t
e
r
 
=
=
=
 
"
A
L
L
"


 
 
 
 
 
 
 
 
?
 
[
.
.
.
t
r
a
c
k
e
d
G
r
a
n
t
s
]


 
 
 
 
 
 
 
 
:
 
t
r
a
c
k
e
d
G
r
a
n
t
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
g
)
 
=
>
 
g
.
s
t
a
t
u
s
 
=
=
=
 
s
t
a
t
u
s
F
i
l
t
e
r
)
;




 
 
 
 
l
i
s
t
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
 
{


 
 
 
 
 
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
d
e
a
d
l
i
n
e
"
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
a
.
d
e
a
d
l
i
n
e
 
&
&
 
!
b
.
d
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
0
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
.
d
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
1
;


 
 
 
 
 
 
 
 
i
f
 
(
!
b
.
d
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
-
1
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
w
 
D
a
t
e
(
a
.
d
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
-
 
n
e
w
 
D
a
t
e
(
b
.
d
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
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


 
 
 
 
 
 
 
 
n
e
w
 
D
a
t
e
(
b
.
d
a
t
e
A
d
d
e
d
)
.
g
e
t
T
i
m
e
(
)
 
-
 
n
e
w
 
D
a
t
e
(
a
.
d
a
t
e
A
d
d
e
d
)
.
g
e
t
T
i
m
e
(
)


 
 
 
 
 
 
)
;


 
 
 
 
}
)
;




 
 
 
 
r
e
t
u
r
n
 
l
i
s
t
;


 
 
}
,
 
[
t
r
a
c
k
e
d
G
r
a
n
t
s
,
 
s
t
a
t
u
s
F
i
l
t
e
r
,
 
s
o
r
t
B
y
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
T
r
a
c
k
e
d
 
=
 
t
r
a
c
k
e
d
G
r
a
n
t
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
t
o
t
a
l
A
p
p
l
i
e
d
 
=
 
t
r
a
c
k
e
d
G
r
a
n
t
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
g
)
 
=
>
 
g
.
s
t
a
t
u
s
 
=
=
=
 
"
A
p
p
l
i
e
d
"


 
 
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
t
o
t
a
l
A
c
c
e
p
t
e
d
 
=
 
t
r
a
c
k
e
d
G
r
a
n
t
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
g
)
 
=
>
 
g
.
s
t
a
t
u
s
 
=
=
=
 
"
A
c
c
e
p
t
e
d
"


 
 
)
.
l
e
n
g
t
h
;




 
 
/
/
 
-
-
-
-
 
R
e
n
d
e
r
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




 
 
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
 
p
b
-
1
2
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
r
a
n
t
 
A
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
 
T
r
a
c
k
e
r
"
 
n
o
I
n
d
e
x
 
/
>




 
 
 
 
 
 
{
/
*
 
A
t
m
o
s
p
h
e
r
i
c
 
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
 
-
z
-
1
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
 
c
l
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
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
2
0
 
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
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
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
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
s
l
a
t
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
s
l
a
t
e
-
9
0
0
/
2
0
 
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
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
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
 
i
n
s
e
t
-
0
 
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
2
]
 
d
a
r
k
:
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
3
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
c
u
r
r
e
n
t
C
o
l
o
r
 
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
,
 
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
9
0
d
e
g
,
 
c
u
r
r
e
n
t
C
o
l
o
r
 
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
4
8
p
x
 
4
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
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
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
1
0
 
m
t
-
6
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
s
t
u
d
e
n
t
/
g
r
a
n
t
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
g
r
a
y
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
c
o
l
o
r
s
 
m
b
-
4
 
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
A
r
r
o
w
L
e
f
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
G
r
a
n
t
s


 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
f
o
n
t
-
d
i
s
p
l
a
y
 
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
w
h
i
t
e
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
A
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
 
T
r
a
c
k
e
r


 
 
 
 
 
 
 
 
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
g
r
a
y
-
5
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
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
T
r
a
c
k
 
y
o
u
r
 
g
r
a
n
t
 
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
 
f
r
o
m
 
i
n
t
e
r
e
s
t
 
t
o
 
a
c
c
e
p
t
a
n
c
e
 
-
 
a
l
l
 
s
t
o
r
e
d


 
 
 
 
 
 
 
 
 
 
l
o
c
a
l
l
y
 
o
n
 
y
o
u
r
 
d
e
v
i
c
e


 
 
 
 
 
 
 
 
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
 
S
u
m
m
a
r
y
 
s
t
a
t
s
 
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
1
 
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
3
 
g
a
p
-
4
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
C
l
i
p
b
o
a
r
d
L
i
s
t
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
t
o
t
a
l
T
r
a
c
k
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
T
o
t
a
l
 
T
r
a
c
k
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
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
b
l
u
e
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
S
e
n
d
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
t
o
t
a
l
A
p
p
l
i
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
A
p
p
l
i
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
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
v
i
o
l
e
t
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
t
o
t
a
l
A
c
c
e
p
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
A
c
c
e
p
t
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
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
e
m
e
r
a
l
d
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
t
a
t
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
t
a
t
.
l
a
b
e
l
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
 
s
c
a
l
e
:
 
0
.
9
 
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
 
+
 
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
"
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
g
r
a
y
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
g
r
a
y
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
g
r
a
y
-
8
0
0
 
p
-
5
 
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
s
t
a
t
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
{
`
w
-
6
 
h
-
6
 
$
{
s
t
a
t
.
i
c
o
n
C
o
l
o
r
}
 
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
3
`
}
 
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
f
o
n
t
-
d
i
s
p
l
a
y
 
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
v
a
l
u
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
g
r
a
y
-
5
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
l
a
b
e
l
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
 
A
c
t
i
o
n
 
b
a
r
 
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
4
,
 
d
e
l
a
y
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
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
f
i
l
t
e
r
 
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
S
l
i
d
e
r
s
H
o
r
i
z
o
n
t
a
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
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
t
a
t
u
s
F
i
l
t
e
r
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
S
t
a
t
u
s
F
i
l
t
e
r
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
 
a
s
 
A
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
S
t
a
t
u
s
 
|
 
"
A
L
L
"
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
p
x
-
3
 
p
y
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
m
e
d
i
u
m
 
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
g
r
a
y
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
g
r
a
y
-
7
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
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
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
g
r
a
y
-
3
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
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
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
L
L
"
>
A
l
l
 
S
t
a
t
u
s
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
A
L
L
_
S
T
A
T
U
S
E
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
o
p
t
i
o
n
 
k
e
y
=
{
s
}
 
v
a
l
u
e
=
{
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
S
o
r
t
 
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
 
c
l
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
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
r
t
B
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
S
o
r
t
B
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
 
a
s
 
"
d
e
a
d
l
i
n
e
"
 
|
 
"
d
a
t
e
A
d
d
e
d
"
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
p
x
-
3
 
p
y
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
m
e
d
i
u
m
 
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
g
r
a
y
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
g
r
a
y
-
7
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
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
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
g
r
a
y
-
3
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
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
u
e
-
5
0
0
/
2
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
o
p
t
i
o
n
 
v
a
l
u
e
=
"
d
a
t
e
A
d
d
e
d
"
>
S
o
r
t
 
b
y
 
D
a
t
e
 
A
d
d
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
d
e
a
d
l
i
n
e
"
>
S
o
r
t
 
b
y
 
D
e
a
d
l
i
n
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
S
p
a
c
e
r
 
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
-
1
"
 
/
>




 
 
 
 
 
 
 
 
{
/
*
 
A
d
d
 
g
r
a
n
t
 
*
/
}


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
m
o
n
o
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
A
d
d
M
o
d
a
l
(
t
r
u
e
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
P
l
u
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
A
d
d
 
G
r
a
n
t


 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
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
 
l
i
s
t
 
/
 
E
m
p
t
y
 
s
t
a
t
e
 
*
/
}


 
 
 
 
 
 
{
t
r
a
c
k
e
d
G
r
a
n
t
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
2
4
 
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
g
r
a
y
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
g
r
a
y
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
g
r
a
y
-
8
0
0
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
t
i
c
k
y
N
o
t
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
1
0
 
h
-
1
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
g
r
a
y
-
6
0
0
 
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
3
"
 
/
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
g
r
a
y
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
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
g
r
a
n
t
s
 
t
r
a
c
k
e
d
 
y
e
t


 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
-
5
0
0
 
m
b
-
5
 
m
a
x
-
w
-
x
s
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
b
y
 
a
d
d
i
n
g
 
a
 
g
r
a
n
t
 
y
o
u
 
a
r
e
 
i
n
t
e
r
e
s
t
e
d
 
i
n
.
 
Y
o
u
r
 
p
r
o
g
r
e
s
s
 
i
s


 
 
 
 
 
 
 
 
 
 
 
 
s
a
v
e
d
 
l
o
c
a
l
l
y
 
o
n
 
t
h
i
s
 
d
e
v
i
c
e
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
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
A
d
d
M
o
d
a
l
(
t
r
u
e
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
A
d
d
 
Y
o
u
r
 
F
i
r
s
t
 
G
r
a
n
t


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
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


 
 
 
 
 
 
)
 
:
 
f
i
l
t
e
r
e
d
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


 
 
 
 
 
 
 
 
 
 
c
l
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
 
p
y
-
1
6
 
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
g
r
a
y
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
g
r
a
y
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
g
r
a
y
-
8
0
0
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
s
H
o
r
i
z
o
n
t
a
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
w
-
8
 
h
-
8
 
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
g
r
a
y
-
6
0
0
 
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
g
r
a
n
t
s
 
m
a
t
c
h
 
t
h
e
 
s
e
l
e
c
t
e
d
 
f
i
l
t
e
r
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
4
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
.
m
a
p
(
(
g
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
c
k
e
d
G
r
a
n
t
C
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
g
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
r
a
n
t
=
{
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
U
p
d
a
t
e
=
{
u
p
d
a
t
e
G
r
a
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
D
e
l
e
t
e
=
{
d
e
l
e
t
e
G
r
a
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
A
d
d
 
G
r
a
n
t
 
M
o
d
a
l
 
*
/
}


 
 
 
 
 
 
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
s
h
o
w
A
d
d
M
o
d
a
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
A
d
d
G
r
a
n
t
M
o
d
a
l


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
e
d
I
d
s
=
{
t
r
a
c
k
e
d
I
d
s
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
d
d
=
{
a
d
d
G
r
a
n
t
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
h
o
w
A
d
d
M
o
d
a
l
(
f
a
l
s
e
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


